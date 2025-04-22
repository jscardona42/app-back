import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ItemModifier } from 'src/home/item-modifier/entities/item-modifier.entity';
import { ItemOption } from 'src/home/item-option/entities/item-option.entity';
import { MenuCategory } from 'src/home/menu-category/entities/menu-category.entity';

@ObjectType()
export class MenuItem {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { defaultValue: 0 })
  price: number;

  @Field(() => String)
  categoryId: string;

  @Field(() => MenuCategory)
  category: MenuCategory;

  @Field(() => [ItemOption])
  options: ItemOption[];

  @Field(() => [ItemModifier])
  modifiers: ItemModifier[];

  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field(() => Number)
  displayOrder: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}