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
import { SubOrgModule } from './graphql/sub-org/sub-org.module';
import { ApolloServerPlugin } from '@apollo/server';

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
      plugins: [
        {
          requestDidStart(requestContext) {
            console.log(`🔹 Received request: ${requestContext.request.query}`);

            return Promise.resolve({
              willSendResponse(responseContext) {
                console.log(`✅ Response sent:success`);
              },
            });
          },
        } as ApolloServerPlugin,
      ],
      context: async ({ req }) => {
        const context = authMiddleware(req);
        if (!(await context).user) {
          throw new GraphQLError('Unauthorized: Invalid Token', {
            extensions: { code: 'UNAUTHORIZED' },
          });
        }
        return context;
      },
      logger: {
        info: (message, ...args) =>
          console.info('[GraphQL Info]', message, ...args),
        warn: (message, ...args) =>
          console.warn('[GraphQL Warn]', message, ...args),
        debug: (message, ...args) =>
          console.debug('[GraphQL Debug]', message, ...args),
        error: (message, ...args) =>
          console.error('[GraphQL Error]', message, ...args),
      },
      // useGlobalPrefix: '/api/v1',
      // include: [TicketsController],
    }),
    OrganizationModule,
    ServicesModule,
    SubOrgModule,
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
