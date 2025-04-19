import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateRestaurantInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;
}