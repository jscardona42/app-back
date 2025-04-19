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
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.restaurantService.findOne(id);
  }
}