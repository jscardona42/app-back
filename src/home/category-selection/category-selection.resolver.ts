import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategorySelectionService } from './category-selection.service';
import { CategorySelection } from './entities/category-selection.entity';

@Resolver(() => CategorySelection)
export class CategorySelectionResolver {
  constructor(private readonly categorySelectionService: CategorySelectionService) {}

}
