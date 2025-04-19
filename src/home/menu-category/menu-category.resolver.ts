import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { MenuCategoryService } from './menu-category.service';
import { MenuCategory } from './entities/menu-category.entity';
import { CreateMenuCategoryInput } from './dto/menu-category.input';

@Resolver(() => MenuCategory)
export class MenuCategoryResolver {
  constructor(private readonly menuCategoryService: MenuCategoryService) {}

  @Mutation(() => MenuCategory)
  createMenuCategory(@Args('createMenuCategoryInput') createMenuCategoryInput: CreateMenuCategoryInput) {
    return this.menuCategoryService.create(createMenuCategoryInput);
  }

  @Query(() => [MenuCategory], { name: 'menuCategories' })
  findAll() {
    return this.menuCategoryService.findAll();
  }

  @Query(() => MenuCategory, { name: 'menuCategory' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.menuCategoryService.findOne(id);
  }
}