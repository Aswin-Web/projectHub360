import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { config } from '../../config/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly SSO_KEY: string;
  constructor() {
    this.SSO_KEY = config().SSO_KEY;
  }
  //   SSO_KEY = config().SSO_KEY;
  async signSSOToken(user: User): Promise<string> {
    console.log('🚀 ~ JwtService ~ SSO_KEY:', this.SSO_KEY);
    return new Promise((resolve, reject) => {
      jwt.sign(
        { id: user.id, email: user.email }, // Avoid passing the full user object for security
        this.SSO_KEY,
        { expiresIn: '1h' }, // Set an expiration time
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        },
      );
    });
  }
}
