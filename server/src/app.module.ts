import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { TicketsController } from './tickets/tickets.controller';
import { ProjectInfoController } from './project-info/project-info.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { JwtService } from './utils/jwt/jwt.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    TicketsController,
    ProjectInfoController,
    UserController,
  ],
  providers: [AppService, UserService, AuthService, PrismaService, JwtService],
})
export class AppModule {}
