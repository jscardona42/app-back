import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  restaurantId: string;

  @Field(() => Int, { defaultValue: 0 })
  displayOrder?: number;

  @Field({ defaultValue: true })
  isActive?: boolean;
}