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
        categorySelection: true,
        menuItems: true
      }
    });
  }

  async findAll() {
    return this.prisma.menuCategory.findMany({
      include: {
        categorySelection: true,
        menuItems: true
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.menuCategory.findUnique({
      where: { id },
      include: {
        categorySelection: true,
        menuItems: true
      }
    });
  }

  async update(id: string, updateMenuCategoryInput: UpdateMenuCategoryInput) {
    return this.prisma.menuCategory.update({
      where: { id },
      data: updateMenuCategoryInput,
      include: {
        categorySelection: true,
        menuItems: true
      }
    });
  }

  async remove(id: string) {
    return this.prisma.menuCategory.delete({
      where: { id }
    });
  }
}