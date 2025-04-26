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

  async getRestaurants() {
    return this.prisma.restaurant.findMany({
      include: {
        menus: {
          include: {
            menuCategories: {
              include: {
                categorySelection: true, menuItems: {
                  include: {
                    itemModifiers: true,
                    itemOptions: {
                      include: {
                        optionChoices: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  async getRestaurantById(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id }
    });
  }

  async populateDemoData() {
    await this.prisma.restaurant.create({
      data: {
        name: 'Pizzería El Forno',
        description: 'Pizzas artesanales al horno de leña',
        menus: {
          create: {
            name: 'Menú Principal',
            description: 'Menú clásico de pizzas',
            displayOrder: 1,
            menuCategories: {
              create: [
                {
                  name: 'Pizzas Clásicas',
                  description: 'Pizzas tradicionales',
                  displayOrder: 1,
                  menuItems: {
                    create: [
                      {
                        name: 'Margarita',
                        description: 'Tomate, mozzarella y albahaca',
                        price: 8.99,
                        displayOrder: 1,
                        itemOptions: {
                          create: {
                            name: 'Tamaño',
                            isRequired: true,
                            displayOrder: 1,
                            optionChoices: {
                              create: {
                                value: 'Grande',
                                priceAdjustment: 2,
                                displayOrder: 1
                              }
                            }
                          }
                        },
                        itemModifiers: {
                          create: {
                            name: 'Extra queso',
                            priceAdjustment: 1.5
                          }
                        }
                      },
                      {
                        name: 'Pepperoni',
                        description: 'Con pepperoni',
                        price: 9.99,
                        displayOrder: 2,
                        itemOptions: {
                          create: {
                            name: 'Tamaño',
                            isRequired: true,
                            displayOrder: 1,
                            optionChoices: {
                              create: {
                                value: 'Grande',
                                priceAdjustment: 2,
                                displayOrder: 1
                              }
                            }
                          }
                        },
                        itemModifiers: {
                          create: {
                            name: 'Extra pepperoni',
                            priceAdjustment: 1.75
                          }
                        }
                      }
                    ]
                  },
                  categorySelection: {
                    create: {
                      isRequired: true,
                      minSelections: 1,
                      maxSelections: 2,
                      allowsMultiple: true
                    }
                  }
                },
                {
                  name: 'Especiales',
                  description: 'Pizzas únicas de la casa',
                  displayOrder: 2,
                  menuItems: {
                    create: [
                      {
                        name: 'Cuatro Quesos',
                        description: 'Queso azul, parmesano, gouda y mozzarella',
                        price: 10.99,
                        displayOrder: 1
                      },
                      {
                        name: 'Barbacoa',
                        description: 'Con carne mechada y BBQ',
                        price: 11.99,
                        displayOrder: 2
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    });

    await this.prisma.restaurant.create({
      data: {
        name: 'Sushi House',
        description: 'Sushi fresco todos los días',
        menus: {
          create: {
            name: 'Menú Sushi',
            description: 'Rolls y nigiris',
            displayOrder: 1,
            menuCategories: {
              create: [
                {
                  name: 'Rolls',
                  displayOrder: 1,
                  menuItems: {
                    create: [
                      {
                        name: 'California Roll',
                        description: 'Cangrejo y aguacate',
                        price: 7.99,
                        displayOrder: 1
                      },
                      {
                        name: 'Philadelphia Roll',
                        description: 'Salmón y queso crema',
                        price: 8.49,
                        displayOrder: 2
                      }
                    ]
                  }
                },
                {
                  name: 'Nigiris',
                  displayOrder: 2,
                  menuItems: {
                    create: [
                      {
                        name: 'Salmón',
                        description: 'Salmón fresco sobre arroz',
                        price: 3.5,
                        displayOrder: 1
                      },
                      {
                        name: 'Atún',
                        description: 'Atún rojo sobre arroz',
                        price: 3.8,
                        displayOrder: 2
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    });
  }
}