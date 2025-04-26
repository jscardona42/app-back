import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Menu } from 'src/home/menu/entities/menu.entity';

@ObjectType()
export class Restaurant {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Menu])
  menus: Menu[]

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}