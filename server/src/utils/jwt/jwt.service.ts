import { Injectable } from '@nestjs/common';
import { Organization, OrgUsers, User } from '@prisma/client';
import { config } from '../../config/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly SSO_KEY: string;
  constructor() {
    this.SSO_KEY = config().SSO_KEY;
  }
  //   SSO_KEY = config().SSO_KEY;
  async signSSOToken(
    user: User,
    domain: Organization,
    org_user: OrgUsers,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          id: user.user_id,
          email: user.email,
          org_id: domain.org_id,
          org_user_id: org_user.org_user_id,
        }, // Avoid passing the full user object for security
        this.SSO_KEY,
        { expiresIn: '1h' }, // Set an expiration time
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            // console.log(token);
            resolve(token);
          }
        },
      );
    });
  }

  async readToken(token: string) {
    // console.log('🚀 ~ JwtService ~ readToken ~ token:', token, this.SSO_KEY);
    try {
      return await jwt.verify(token, this.SSO_KEY);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
