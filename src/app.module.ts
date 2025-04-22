import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MenuModule } from './home/menu/menu.module';
import { RestaurantModule } from './home/restaurant/restaurant.module';
import { MenuCategoryModule } from './home/menu-category/menu-category.module';
import { MenuItemModule } from './home/menu-item/menu-item.module';
import { CategorySelectionModule } from './home/category-selection/category-selection.module';
import { ItemOptionModule } from './home/item-option/item-option.module';
import { OptionChoiceModule } from './home/option-choise/option-choice.module';
import { ItemModifierModule } from './home/item-modifier/item-modifier.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [],
    }),
    MenuModule,
    RestaurantModule,
    MenuCategoryModule,
    MenuItemModule,
    CategorySelectionModule,
    ItemOptionModule,
    OptionChoiceModule,
    ItemModifierModule,
  ],
})
export class AppModule {}