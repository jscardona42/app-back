import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MenuItem } from 'src/home/menu-item/entities/menu-item.entity';

@ObjectType()
export class ItemModifier {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  itemId: string;

  @Field(() => MenuItem)
  item: MenuItem;

  @Field(() => String)
  name: string;

  @Field(() => Number, { defaultValue: 0 })
  priceAdjustment: number;

  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}