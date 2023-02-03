import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}


export default class TodoDataService extends Service {
  @tracked todos = [];

  @action
  add(text) {
    let newTodo = new Todo(text);

    this.todos = [...this.todos, newTodo];
    console.log(this.todos);
  }

  get all() {
    return this.todos;
  }
}
