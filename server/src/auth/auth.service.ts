import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Organization, User } from '@prisma/client';
import { JwtService } from 'src/utils/jwt/jwt.service';
import { config } from 'src/config/config';

@Injectable()
export class AuthService {
  constructor(
    readonly prisma: PrismaService,
    readonly jwt: JwtService,
  ) {}
  async checkIfUserExists(email: string): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: {
        email,
      },
    });
  }

  async createAUser(
    email: string,
    name: string,
    picture: string,
  ): Promise<User[]> {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        picture,
      },
    });
    return [user];
  }
  async checkIfOrgExists(domain: string): Promise<Organization[]> {
    return await this.prisma.organization.findMany({
      where: {
        org_internal_name: domain,
      },
    });
  }

  async createAOrg(domain: string, user_id: string): Promise<Organization[]> {
    const org = await this.prisma.organization.create({
      data: {
        org_internal_name: domain,
        org_external_name: domain,
        user_id: user_id,
      },
    });
    return [org];
  }
  async createAToken(data: User, domain: Organization): Promise<string> {
    return await this.jwt.signSSOToken(data, domain);
  }

  async authenticateUser(email: string, name: string, picture: string) {
    const email_domain = email.split('@')[1].split('.')[0];
    const domain: string = config().PUBLIC_DOMAINS.includes(email_domain)
      ? email.replaceAll('.', '_').replaceAll('@', '_')
      : email_domain;
    let isUser = await this.checkIfUserExists(email);
    let isDomain = await this.checkIfOrgExists(domain);

    if (isUser.length === 0) {
      isUser = await this.createAUser(email, name, picture);
    }
    if (isDomain.length === 0) {
      isDomain = await this.createAOrg(domain, isUser[0].user_id);
    }
    return await this.createAToken(isUser[0], isDomain[0]);
  }
}
