import { Module } from '@nestjs/common';
import { ItemModifierService } from './item-modifier.service';
import { ItemModifierResolver } from './item-modifier.resolver';

@Module({
  providers: [ItemModifierResolver, ItemModifierService],
})
export class ItemModifierModule {}
