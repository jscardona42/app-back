import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/restaurant.input';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) { }

  @Mutation(() => Restaurant)
  createRestaurant(@Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput) {
    return this.restaurantService.create(createRestaurantInput);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  getRestaurants() {
    return this.restaurantService.getRestaurants();
  }

  @Query(() => Restaurant)
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.restaurantService.getRestaurantById(id);
  }

  @Mutation(() => String)
  async populateDemoData(): Promise<string> {
    await this.restaurantService.populateDemoData();
    return 'Datos de prueba creados con éxito 🚀';
  }
}