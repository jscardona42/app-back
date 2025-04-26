import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ItemOption } from 'src/home/item-option/entities/item-option.entity';

@ObjectType()
export class OptionChoice {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  optionId: string;

  @Field(() => ItemOption)
  itemOption: ItemOption;

  @Field(() => String)
  value: string;

  @Field(() => Number, { defaultValue: 0 })
  priceAdjustment: number;

  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field(() => Number)
  displayOrder: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}