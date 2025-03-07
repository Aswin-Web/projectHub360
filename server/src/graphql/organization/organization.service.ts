import { Injectable } from '@nestjs/common';
import { OrganizationObj } from './organization.model';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private readonly prisma: PrismaService) {}
  private organization: OrganizationObj[] = [
    // {
    //   org_id: 'ss',
    //   created_at: 'ss',
    //   org_external_name: 'ss',
    //   org_internal_name: 'd',
    //   user_id: 'ee',
    //   update_at: '',
    // },
  ];
  findall(): OrganizationObj[] {
    return this.organization;
  }

  async getAllPurchases({ org_user_id }) {
    const resp = await this.prisma.orgServices.findMany({
      where: {
        org_user_id,
      },
      include: {
        org: true,
        org_user: true,
        service: true,
      },
    });
    // console.log('🚀 ~ OrganizationService ~ getAllPurchases ~ resp:', resp);
    return resp;
  }
}
