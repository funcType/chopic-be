import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactlistService } from './contactlist.service';
import { Contactlist } from './entities/contactlist.entity';
import { CreateContactlistInput } from './dto/create-contactlist.input';
import { UpdateContactlistInput } from './dto/update-contactlist.input';

@Resolver(() => Contactlist)
export class ContactlistResolver {
  constructor(private readonly contactlistService: ContactlistService) {}

  @Mutation(() => Contactlist)
  createContactlist(@Args('createContactlistInput') createContactlistInput: CreateContactlistInput) {
    return this.contactlistService.create(createContactlistInput);
  }

  @Query(() => [Contactlist], { name: 'contactlist' })
  findAll() {
    return this.contactlistService.findAll();
  }

  @Query(() => Contactlist, { name: 'contactlist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactlistService.findOne(id);
  }

  @Mutation(() => Contactlist)
  updateContactlist(@Args('updateContactlistInput') updateContactlistInput: UpdateContactlistInput) {
    return this.contactlistService.update(updateContactlistInput.id, updateContactlistInput);
  }

  @Mutation(() => Contactlist)
  removeContactlist(@Args('id', { type: () => Int }) id: number) {
    return this.contactlistService.remove(id);
  }
}
