import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma } from 'generated/prisma/client';

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() postData: Prisma.TodoCreateInput) {
    return this.todoService.create(postData);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() postData: Prisma.TodoUpdateInput) {
    return this.todoService.update({ id: +id }, postData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove({ id: +id });
  }
}
