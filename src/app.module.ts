import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MenuModule } from './home/menu/menu.module';
import { RestaurantModule } from './home/restaurant/restaurant.module';
import { MenuCategoryModule } from './home/menu-category/menu-category.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Genera el esquema en memoria
      include: [], // Incluye tus resolverse
    }),
    MenuModule,
    RestaurantModule,
    MenuCategoryModule,
  ],
})
export class AppModule {}