import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateMenuItemInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  categoryId: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive?: boolean;

  @Field(() => Number)
  displayOrder: number;
}

@InputType()
export class UpdateMenuItemInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { nullable: true })
  price?: number;

  @Field(() => String, { nullable: true })
  categoryId?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Number, { nullable: true })
  displayOrder?: number;
}