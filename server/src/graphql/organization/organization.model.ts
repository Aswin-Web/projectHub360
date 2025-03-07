import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Organization } from '@prisma/client';
import { SubOrgObj } from '../sub-org/sub-org.model';

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
  @Field(() => [SubOrgObj])
  SubOrganization: SubOrgObj[];
}
@ObjectType()
export class OrgServicesObject {
  @Field(() => Int)
  org_id: number;

  @Field(() => Date)
  created_at: Date;

  @Field(() => String)
  org_service_id: string;

  @Field(() => Int)
  service_id: number;

  // @Field(() => SERVICETYPE) // Ensure SERVICETYPE is a valid GraphQL enum
  // service_type: SERVICETYPE;

  @Field(() => Int)
  org_user_id: number;

  @Field(() => Date)
  updated_at: Date;
}
