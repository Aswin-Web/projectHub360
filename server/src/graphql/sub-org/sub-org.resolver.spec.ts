import { Test, TestingModule } from '@nestjs/testing';
import { SubOrgResolver } from './sub-org.resolver';

describe('SubOrgResolver', () => {
  let resolver: SubOrgResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubOrgResolver],
    }).compile();

    resolver = module.get<SubOrgResolver>(SubOrgResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
