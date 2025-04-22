import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateOptionChoiceInput {
  @Field(() => String)
  optionId: string;

  @Field(() => String)
  value: string;

  @Field(() => Number, { nullable: true, defaultValue: 0 })
  priceAdjustment?: number;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive?: boolean;

  @Field(() => Number)
  displayOrder: number;
}

@InputType()
export class UpdateOptionChoiceInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  optionId?: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => Number, { nullable: true })
  priceAdjustment?: number;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Number, { nullable: true })
  displayOrder?: number;
}