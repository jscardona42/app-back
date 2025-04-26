import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CategorySelection } from 'src/home/category-selection/entities/category-selection.entity';
import { MenuItem } from 'src/home/menu-item/entities/menu-item.entity';
import { Menu } from 'src/home/menu/entities/menu.entity';

@ObjectType()
export class MenuCategory {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  menuId: string;

  @Field(() => Menu)
  menu: Menu;

  @Field(() => [MenuItem])
  menuItems: MenuItem[];

  @Field(() => CategorySelection, { nullable: true })
  categorySelection?: CategorySelection;

  @Field(() => Number)
  displayOrder: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}