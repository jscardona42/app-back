import { Module } from '@nestjs/common';
import { MenuCategoryService } from './menu-category.service';
import { MenuCategoryResolver } from './menu-category.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [MenuCategoryResolver, MenuCategoryService, PrismaService],
})
export class MenuCategoryModule { }
