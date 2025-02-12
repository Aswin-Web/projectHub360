import { Field } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { OrganizationObj } from '../organization/organization.model';

export class UserObj implements User {
  @Field()
  name: string;
  @Field()
  createdAt: Date;
  @Field()
  email: string;
  @Field()
  picture: string;
  @Field()
  user_id: string;
  @Field(() => [OrganizationObj])
  Organization: OrganizationObj;
}
