import { Injectable } from '@nestjs/common';
import { CreateContactlistInput } from './dto/create-contactlist.input';
import { UpdateContactlistInput } from './dto/update-contactlist.input';

@Injectable()
export class ContactlistService {
  create(createContactlistInput: CreateContactlistInput) {
    return 'This action adds a new contactlist';
  }

  findAll() {
    return `This action returns all contactlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactlist`;
  }

  update(id: number, updateContactlistInput: UpdateContactlistInput) {
    return `This action updates a #${id} contactlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactlist`;
  }
}
