import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateItemModifierInput {
  @Field(() => String)
  itemId: string;

  @Field(() => String)
  name: string;

  @Field(() => Number, { nullable: true, defaultValue: 0 })
  priceAdjustment?: number;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive?: boolean;
}

@InputType()
export class UpdateItemModifierInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  itemId?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  priceAdjustment?: number;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}