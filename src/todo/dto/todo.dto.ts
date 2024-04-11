import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;
}

export class DeleteTodoDto {
  @IsInt()
  readonly id: number;
}

export class PatchTodoDto {
  @IsBoolean()
  readonly done: boolean;
  readonly id: number;
}
