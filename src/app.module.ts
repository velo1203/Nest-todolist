import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [AuthModule, UsersModule, PrismaModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
