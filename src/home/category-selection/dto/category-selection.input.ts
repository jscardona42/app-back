import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCategorySelectionInput {
  @Field(() => String)
  categoryId: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isRequired?: boolean;

  @Field(() => Number, { nullable: true, defaultValue: 1 })
  minSelections?: number;

  @Field(() => Number, { nullable: true, defaultValue: 1 })
  maxSelections?: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  allowsMultiple?: boolean;
}

@InputType()
export class UpdateCategorySelectionInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  categoryId?: string;

  @Field(() => Boolean, { nullable: true })
  isRequired?: boolean;

  @Field(() => Number, { nullable: true })
  minSelections?: number;

  @Field(() => Number, { nullable: true })
  maxSelections?: number;

  @Field(() => Boolean, { nullable: true })
  allowsMultiple?: boolean;
}