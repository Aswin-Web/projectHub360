import { Test, TestingModule } from '@nestjs/testing';
import { OrgServicesService } from './org-services.service';

describe('OrgServicesService', () => {
  let service: OrgServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgServicesService],
    }).compile();

    service = module.get<OrgServicesService>(OrgServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
