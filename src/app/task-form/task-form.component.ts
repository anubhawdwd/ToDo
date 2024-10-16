import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  newTask:any ='';
  public taskObject: any[] = []

  @Output() public addTask = new EventEmitter()

  onKeydown(event: KeyboardEvent) {
    
    if (event.key==='Enter') {
      if(this.newTask && this.newTask != ' '){
        this.onAddTask()
      }
    
    }
  }
  
  onAddTask(){
    const newTask = { 'id': uuidv4(), 'newTask': this.newTask, 'isNew': true }; //uuidv4 generates unique id
    if(this.newTask && this.newTask.trim()){
      this.addTask.emit(newTask)
    }
    this.newTask=''
  }
}
