import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaModule],
})
export class UsersModule {}
