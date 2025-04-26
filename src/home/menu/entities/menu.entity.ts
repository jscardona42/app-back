import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MenuCategory } from 'src/home/menu-category/entities/menu-category.entity';
import { Restaurant } from 'src/home/restaurant/entities/restaurant.entity';

@ObjectType()
export class Menu {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  img?: string;

  @Field(() => String)
  restaurantId: string;

  @Field(() => Restaurant)
  restaurant: Restaurant;

  @Field(() => [MenuCategory])
  menuCategories: MenuCategory[];

  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field(() => Number)
  displayOrder: number;

  // @Field(() => Clien, { nullable: true })
  // client?: Client;

  @Field(() => String, { nullable: true })
  clientId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}