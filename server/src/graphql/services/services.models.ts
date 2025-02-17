import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Services } from '@prisma/client';
@ObjectType()
export class ServiceObj implements Services {
  @Field()
  created_at: Date;
  @Field()
  disable: boolean;
  @Field()
  order_no: number;
  @Field()
  service_descp: string;
  @Field()
  service_external_name: string;
  @Field()
  service_icon: string;
  @Field()
  service_id: number;
  @Field()
  service_internal_name: string;
  @Field()
  service_type: $Enums.SERVICETYPE;
  @Field()
  updated_At: Date;
}
