import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [PrismaModule],
})
export class TodoModule {}
