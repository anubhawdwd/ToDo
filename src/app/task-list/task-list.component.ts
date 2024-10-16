import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
@Input() public tasks:any[]= [];
@Output() public deleteTask = new EventEmitter();
@Output() public editTask = new EventEmitter();
@Output() public removeAllTask = new EventEmitter();





handleEdit(id:number){

  this.editTask.emit(id)
}

handleDelete(id:number){
  this.deleteTask.emit(id)
}

handleRemoveTask(){
  this.removeAllTask.emit()
}

}
