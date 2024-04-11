import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreateTodoDto, DeleteTodoDto, PatchTodoDto } from './dto/todo.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Todo API')
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @UseGuards(AuthGuard)
  @Get()
  getTodo(@Request() req) {
    return this.todoService.get(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Post()
  createTodo(@Body() body: CreateTodoDto, @Request() req) {
    const todo = body;
    return this.todoService.create(todo, req.user.id);
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteTodo(@Body() body: DeleteTodoDto, @Request() req) {
    return this.todoService.delete(body.id, req.user.id);
  }

  @UseGuards(AuthGuard)
  @Patch()
  updateTodo(@Body() body: PatchTodoDto, @Request() req) {
    return this.todoService.update(body.id, body.done, req.user.id);
  }
}
