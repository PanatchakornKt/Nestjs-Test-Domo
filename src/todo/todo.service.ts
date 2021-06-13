import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import * as uuid from 'uuid/v1';

@Injectable()
export class TodoService {
  todosArray: Todo[];
  addTodo(title: string, subtitle: string) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuid();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }

  getTodos() {
    return this.todoArray;
  }

  removeTodoById(id: string) {
    const found = this.todoArray.find(item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }
    this.todoArray = this.todoArray.filter((item) => {
      return item.id !== id;
    });
    return todoArray;
  }
}
