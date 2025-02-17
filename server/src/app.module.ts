import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { JwtService } from './utils/jwt/jwt.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './utils/test.utils';
import { OrganizationModule } from './graphql/organization/organization.module';
import { ServicesModule } from './graphql/services/services.module';
import { authMiddleware } from './utils/middleware.utils';
import { GraphQLError } from 'graphql';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: '/api/v1',
      sortSchema: true,
      context: async ({ req }) => {
        const context = authMiddleware(req);
        if (!(await context).user) {
          throw new GraphQLError('Unauthorized: Invalid Token', {
            extensions: { code: 'UNAUTHORIZED' },
          });
        }
        return context;
      },
      // useGlobalPrefix: '/api/v1',
      // include: [TicketsController],
    }),
    OrganizationModule,
    ServicesModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AuthService,
    PrismaService,
    JwtService,
    AppResolver,
    // ServicesModule,
  ],
})
export class AppModule {}
