import { Module } from '@nestjs/common';
import { ContactlistService } from './contactlist.service';
import { ContactlistResolver } from './contactlist.resolver';

@Module({
  providers: [ContactlistResolver, ContactlistService],
})
export class ContactlistModule {}
