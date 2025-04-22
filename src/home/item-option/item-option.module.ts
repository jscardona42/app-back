import { Module } from '@nestjs/common';
import { ItemOptionService } from './item-option.service';
import { ItemOptionResolver } from './item-option.resolver';

@Module({
  providers: [ItemOptionResolver, ItemOptionService],
})
export class ItemOptionModule {}
