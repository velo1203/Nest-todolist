import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @ApiProperty({ description: 'Todo title' })
  readonly title: string;
}

export class DeleteTodoDto {
  @ApiProperty({ description: 'Todo Id' })
  @IsInt()
  readonly id: number;
}

export class PatchTodoDto {
  @ApiProperty({ description: 'Done Status' })
  @IsBoolean()
  readonly done: boolean;

  @ApiProperty({ description: 'The Todo Id' })
  @IsInt()
  readonly id: number;
}
