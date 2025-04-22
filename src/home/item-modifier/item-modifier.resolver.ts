import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemModifierService } from './item-modifier.service';
import { ItemModifier } from './entities/item-modifier.entity';

@Resolver(() => ItemModifier)
export class ItemModifierResolver {
  constructor(private readonly itemModifierService: ItemModifierService) {}

}
