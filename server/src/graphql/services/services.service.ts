import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(readonly prisma: PrismaService) {}
  async findAll() {
    //  this.prisma.services.findMany({})
    return await this.prisma.services.findMany({});
  }

  async purchaseAnService(
    service: {
      service_id: number;
      service_type: 'TABLE' | 'PRODUCT' | 'TICKETING';
    },
    user: { org_id: number; org_user_id: number },
  ) {
    return this.prisma.orgServices.create({
      data: {
        org_id: user.org_id,
        org_user_id: user.org_user_id,
        service_id: service.service_id,
        service_type: service.service_type,
      },
    });
  }
}
