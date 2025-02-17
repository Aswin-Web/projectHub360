import { Request } from 'express';
import { JwtService } from './jwt/jwt.service';

export const authMiddleware = async (req: Request) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const jwtService = new JwtService();
    const user = token ? await jwtService.readToken(token) : null;
    // console.log('🚀 ~ authMiddleware ~ user:', user);
    return { user }; // Attach user to context
  } catch {
    return { user: null };
  }
};
