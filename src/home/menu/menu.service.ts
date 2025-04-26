import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMenuInput } from './dto/menu.input';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) { }

  async createMenu(createMenuInput: CreateMenuInput) {
    return this.prisma.menu.create({
      data: {
        name: createMenuInput.name,
        description: createMenuInput.description,
        restaurantId: createMenuInput.restaurantId,
        displayOrder: createMenuInput.displayOrder || 0,
        isActive: createMenuInput.isActive !== false,
      },
    });
  }

  async getMenu() {
    return this.prisma.menu.findMany({
      include: {
        menuCategories: {
          include: {
            menuItems: true
          },
        },
      },
    });
  }
}