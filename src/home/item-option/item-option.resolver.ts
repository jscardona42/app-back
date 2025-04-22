import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemOptionService } from './item-option.service';
import { ItemOption } from './entities/item-option.entity';

@Resolver(() => ItemOption)
export class ItemOptionResolver {
  constructor(private readonly itemOptionService: ItemOptionService) { }

}
