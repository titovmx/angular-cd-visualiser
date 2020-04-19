import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TodoContainerComponent,
  ],
  providers: [],
})
export class DemoModule { }
