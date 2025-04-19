import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMenuCategoryInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  menuId: string;

  @Field(() => Int)
  displayOrder: number;

  // @Field(() => CreateCategorySelectionInput, { nullable: true })
  // selectionRules?: CreateCategorySelectionInput;
}

@InputType()
export class UpdateMenuCategoryInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;
}