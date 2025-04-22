import { Module } from '@nestjs/common';
import { CategorySelectionService } from './category-selection.service';
import { CategorySelectionResolver } from './category-selection.resolver';

@Module({
  providers: [CategorySelectionResolver, CategorySelectionService],
})
export class CategorySelectionModule {}
