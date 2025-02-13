import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(readonly prisma: PrismaService) {}
  async findAll() {
    //  this.prisma.services.findMany({})
    console.log(
      '🚀 ~ ServicesService ~ findAll ~ this.prisma.services.findMany({}):',
      await this.prisma.services.findMany({}),
    );
    return await this.prisma.services.findMany({});
  }
}
