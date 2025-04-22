import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateItemOptionInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  itemId: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isRequired?: boolean;

  @Field(() => Number)
  displayOrder: number;
}

@InputType()
export class UpdateItemOptionInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  itemId?: string;

  @Field(() => Boolean, { nullable: true })
  isRequired?: boolean;

  @Field(() => Number, { nullable: true })
  displayOrder?: number;
}