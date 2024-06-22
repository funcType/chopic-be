import { Test, TestingModule } from '@nestjs/testing';
import { ContactlistResolver } from './contactlist.resolver';
import { ContactlistService } from './contactlist.service';

describe('ContactlistResolver', () => {
  let resolver: ContactlistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactlistResolver, ContactlistService],
    }).compile();

    resolver = module.get<ContactlistResolver>(ContactlistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
