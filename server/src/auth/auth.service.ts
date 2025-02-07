import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { JwtService } from 'src/utils/jwt/jwt.service';

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
  async createAToken(data: User): Promise<string> {
    return await this.jwt.signSSOToken(data);
  }

  async authenticateUser(email: string, name: string, picture: string) {
    let isUser = await this.checkIfUserExists(email);
    if (isUser.length === 0) {
      isUser = await this.createAUser(email, name, picture);
    }
    return await this.createAToken(isUser[0]);
  }
}
