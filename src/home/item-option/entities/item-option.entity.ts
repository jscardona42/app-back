import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MenuItem } from 'src/home/menu-item/entities/menu-item.entity';
import { OptionChoice } from 'src/home/option-choise/entities/option-choice.entity';

@ObjectType()
export class ItemOption {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  itemId: string;

  @Field(() => MenuItem)
  item: MenuItem;

  @Field(() => [OptionChoice])
  choices: OptionChoice[];

  @Field(() => Boolean, { defaultValue: false })
  isRequired: boolean;

  @Field(() => Number)
  displayOrder: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}