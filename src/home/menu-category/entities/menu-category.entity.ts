import { ObjectType, Field, ID } from '@nestjs/graphql';
// import { MenuItem } from '../../menu-item/entities/menu-item.entity';
// import { CategorySelection } from './category-selection.entity';

@ObjectType()
export class MenuCategory {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  // @Field(() => [MenuItem])
  // items: MenuItem[];

  // @Field(() => CategorySelection, { nullable: true })
  // selectionRules?: CategorySelection;

  @Field()
  displayOrder: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}