import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async get(userid) {
    return this.prisma.todo.findMany({
      where: {
        userId: userid,
      },
    });
  }

  async create(todo, userId) {
    return this.prisma.todo.create({
      data: {
        ...todo,
        userId,
      },
    });
  }

  async delete(todoId, userid) {
    const todo = await this.prisma.todo.findUnique({
      where: { id: todoId, userId: userid },
    });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${todoId} not found`);
    }

    return this.prisma.todo.delete({
      where: { id: todoId },
    });
  }

  async update(todoId, done, userid) {
    const todo = await this.prisma.todo.findUnique({
      where: { id: todoId, userId: userid },
    });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${todoId} not found`);
    }
    const updatedTodo = {
      ...todo,
      done,
    };

    return this.prisma.todo.update({
      where: { id: todoId },
      data: updatedTodo,
    });
  }
}
