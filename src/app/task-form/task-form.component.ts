import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  newTaskItem:any ='';
  public taskObject: any[] = []

  @Output() public addTask = new EventEmitter()

  onKeydown(event: KeyboardEvent) {
    
    if (event.key==='Enter') {
      if(this.newTaskItem && this.newTaskItem != ' '){
        this.onAddTask()
      }
    
    }
  }

  capitalizeFirstLetter(arg:string) {
    return arg.charAt(0).toUpperCase() + arg.slice(1);
  }
  
  onAddTask(){
    this.newTaskItem = this.capitalizeFirstLetter(this.newTaskItem)
    const newTask = { 'id': uuidv4(), 'newTask': this.newTaskItem, 'isNew': true }; //uuidv4 generates unique id
    if(this.newTaskItem && this.newTaskItem.trim()){
      this.addTask.emit(newTask)
    }
    this.newTaskItem=''
  }
}
