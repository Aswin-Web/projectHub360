import { Test, TestingModule } from '@nestjs/testing';
import { SubOrgService } from './sub-org.service';

describe('SubOrgService', () => {
  let service: SubOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubOrgService],
    }).compile();

    service = module.get<SubOrgService>(SubOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
