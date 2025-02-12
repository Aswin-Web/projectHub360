import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Organization } from '@prisma/client';

@ObjectType()
export class OrganizationObj implements Organization {
  @Field(() => Int)
  org_id: number;

  @Field()
  org_external_name: string;

  @Field()
  org_internal_name: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;
  @Field()
  update_at: Date;

  // user User @relation(fields: [user_id],references: [user_id])

  // SubOrganization SubOrganization[]
}
