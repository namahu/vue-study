import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({ data });
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      include: {
        labels: {
          select: {
            id: true,
            name: true,
            color: true,
          }
        }
      }
    });
  }

  async findOne(
    where: Prisma.TodoWhereUniqueInput
  ): Promise<Todo | null> {
    return this.prisma.todo.findUnique({ where });
  }

  async update(
    where: Prisma.TodoWhereUniqueInput,
    data: Prisma.TodoUpdateInput
  ) {
    return this.prisma.todo.update({ where, data });
  }

  async remove(where: Prisma.TodoWhereUniqueInput) {
    return this.prisma.todo.delete({ where });
  }
}
