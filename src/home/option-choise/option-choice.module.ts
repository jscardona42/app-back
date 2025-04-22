import { Module } from '@nestjs/common';
import { OptionChoiceService } from './option-choice.service';
import { OptionChoiceResolver } from './option-choice.resolver';

@Module({
  providers: [OptionChoiceResolver, OptionChoiceService],
})
export class OptionChoiceModule {}
