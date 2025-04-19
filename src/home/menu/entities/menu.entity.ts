import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Menu {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  // @Field(() => Restaurant)
  // restaurant: Restaurant;

  // @Field(() => [MenuCategory])
  // categories: MenuCategory[];

  @Field()
  isActive: boolean;

  @Field()
  displayOrder: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}