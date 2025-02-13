import { Query, Resolver } from '@nestjs/graphql';
import { ServiceObj } from './services.models';
import { ServicesService } from './services.service';

@Resolver()
export class ServicesResolver {
  constructor(private readonly service: ServicesService) {}

  @Query(() => [ServiceObj])
  async getServices(): Promise<ServiceObj[]> {
    return await this.service.findAll();
  }
}
