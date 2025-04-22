import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MenuCategory } from 'src/home/menu-category/entities/menu-category.entity';

@ObjectType()
export class CategorySelection {
  @Field(() => ID)
  id: string;

  @Field(() => MenuCategory)
  category: MenuCategory;

  @Field(() => Boolean, { defaultValue: false })
  isRequired: boolean;

  @Field(() => Number, { defaultValue: 1 })
  minSelections: number;

  @Field(() => Number, { defaultValue: 1 })
  maxSelections: number;

  @Field(() => Boolean, { defaultValue: false })
  allowsMultiple: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}