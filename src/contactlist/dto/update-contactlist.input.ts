import { CreateContactlistInput } from './create-contactlist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactlistInput extends PartialType(CreateContactlistInput) {
  @Field(() => Int)
  id: number;
}
