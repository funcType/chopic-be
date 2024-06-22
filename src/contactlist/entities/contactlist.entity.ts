import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Contactlist {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
