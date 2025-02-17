import {
  Args,
  Context,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { ServiceObj } from './services.models';
import { ServicesService } from './services.service';
import { OrgServicesObj } from '../org-services/org-services.model';

@InputType()
export class AddServiceToOrgDTO {
  @Field()
  service_id: number;
  @Field()
  service_type: 'TABLE' | 'PRODUCT' | 'TICKETING';
}

@Resolver()
export class ServicesResolver {
  constructor(private readonly service: ServicesService) {}

  @Query(() => [ServiceObj])
  async getServices(): Promise<ServiceObj[]> {
    return await this.service.findAll();
  }

  @Mutation(() => OrgServicesObj)
  async addServiceToOrg(
    @Args('input') data: AddServiceToOrgDTO,
    @Context() context,
  ) {
    const { org_id, org_user_id } = context.user;
    console.log('🚀 ~ ServicesResolver ~ org_user_id:', context.user);
    return await this.service.purchaseAnService(data, { org_id, org_user_id });
  }
}
