import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OptionChoiceService } from './option-choice.service';
import { OptionChoice } from './entities/option-choice.entity';

@Resolver(() => OptionChoice)
export class OptionChoiceResolver {
  constructor(private readonly optionChoiceService: OptionChoiceService) {}

}
