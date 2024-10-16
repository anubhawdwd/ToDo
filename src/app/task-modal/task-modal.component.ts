import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

@Output() saveKeydown = new EventEmitter()
@Output() save = new EventEmitter<any>()
@Output() delete = new EventEmitter()
@Output() close = new EventEmitter()
@Input() isEditing:boolean=false;
@Input() isDeleting:boolean=false;
@Input() deleteTask:string="";
@Input() editTask:string="";
@Input() task:string = ""
// @Input() saveEdit():any;

 closeModalInside(){
    this.close.emit()
  }

  onSaveKeydown(event: KeyboardEvent){
    this.saveKeydown.emit(event)
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key==='Enter') {
      if(this.task && this.task != ' '){
        this.saveEditInside()
      }
    
    }
  }
  saveEditInside(){
    console.log("saveEdit", this.editTask);
    this.save.emit(this.task)
    // this.save.emit(this.editTask)
  }
  onDelete(){
    this.delete.emit()
  }
  

}
