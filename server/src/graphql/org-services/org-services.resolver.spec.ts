import { Test, TestingModule } from '@nestjs/testing';
import { OrgServicesResolver } from './org-services.resolver';

describe('OrgServicesResolver', () => {
  let resolver: OrgServicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgServicesResolver],
    }).compile();

    resolver = module.get<OrgServicesResolver>(OrgServicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
