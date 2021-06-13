import { Controller } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos() {
    return todoService.getTodos();
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.todoService.addTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return `id is ${id}`;
  }
}
