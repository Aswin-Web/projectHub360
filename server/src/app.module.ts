import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { TicketsController } from './tickets/tickets.controller';
import { ProjectInfoController } from './project-info/project-info.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    AuthController,
    TicketsController,
    ProjectInfoController,
    UserController,
  ],
  providers: [AppService],
})
export class AppModule {}
