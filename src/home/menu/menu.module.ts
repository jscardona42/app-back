import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  providers: [MenuResolver, MenuService, PrismaService],
})
export class MenuModule { }