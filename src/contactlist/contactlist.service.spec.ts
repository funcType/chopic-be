import { Test, TestingModule } from '@nestjs/testing';
import { ContactlistService } from './contactlist.service';

describe('ContactlistService', () => {
  let service: ContactlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactlistService],
    }).compile();

    service = module.get<ContactlistService>(ContactlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
