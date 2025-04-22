import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuItemService } from './menu-item.service';
import { MenuItem } from './entities/menu-item.entity';

@Resolver(() => MenuItem)
export class MenuItemResolver {
  constructor(private readonly menuItemService: MenuItemService) { }

}
