import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
interface CreateSubOrgINT {
  sub_external_name: string;
  user_id: string;
  org_id: number;
}

@Injectable()
export class SubOrgService {
  constructor(private prisma: PrismaService) {}
  async createASubOrg(info: CreateSubOrgINT) {
    return await this.prisma.subOrganization.create({
      data: {
        sub_external_name: info.sub_external_name,
        org_id: info.org_id,
        user_id: info.user_id,
      },
    });
  }
}
