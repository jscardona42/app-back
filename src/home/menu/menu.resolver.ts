import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';
import { CreateMenuInput } from './dto/menu.input';

@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) { }

  @Mutation(() => Menu)
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput) {
    return this.menuService.createMenu(createMenuInput);
  }

  @Query(() => [Menu], { name: 'menu' })
  getMenu() {
    return this.menuService.getMenu();
  }
}
