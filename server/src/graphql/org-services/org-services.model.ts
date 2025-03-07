import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, OrgServices } from '@prisma/client';
import { ServiceObj } from '../services/services.models';
@ObjectType()
export class OrgServicesObj implements OrgServices {
  @Field()
  created_at: Date;
  @Field()
  org_id: number;
  @Field()
  org_service_id: string;
  @Field()
  org_user_id: number;
  @Field()
  service_id: number;
  @Field()
  service_type: $Enums.SERVICETYPE;
  @Field()
  updated_at: Date;
  @Field(() => ServiceObj)
  service: ServiceObj;
}
