import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateRestaurantInput } from './dto/restaurant.input';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) { }

  async create(createRestaurantInput: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: createRestaurantInput,
    });
  }

  async findAll() {
    return this.prisma.restaurant.findMany();
  }

  async findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },
    });
  }
}