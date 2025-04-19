import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMenuCategoryInput, UpdateMenuCategoryInput } from './dto/menu-category.input';

@Injectable()
export class MenuCategoryService {
  constructor(private prisma: PrismaService) { }

  async create(createMenuCategoryInput: CreateMenuCategoryInput) {
    return this.prisma.menuCategory.create({
      data: {
        ...createMenuCategoryInput
      },
      include: {
        selectionRules: true,
        items: true
      }
    });
  }

  async findAll() {
    return this.prisma.menuCategory.findMany({
      include: {
        selectionRules: true,
        items: true
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.menuCategory.findUnique({
      where: { id },
      include: {
        selectionRules: true,
        items: true
      }
    });
  }

  async update(id: string, updateMenuCategoryInput: UpdateMenuCategoryInput) {
    return this.prisma.menuCategory.update({
      where: { id },
      data: updateMenuCategoryInput,
      include: {
        selectionRules: true,
        items: true
      }
    });
  }

  async remove(id: string) {
    return this.prisma.menuCategory.delete({
      where: { id }
    });
  }
}