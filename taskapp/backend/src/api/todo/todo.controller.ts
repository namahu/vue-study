import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOne({ id });
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() postData: Prisma.TodoUpdateInput) {
    return this.todoService.update({ id }, postData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.remove({ id });
  }
}
