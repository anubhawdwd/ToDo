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
@Output() removeAll = new EventEmitter()
@Input() isEditing:boolean=false;
@Input() isDeleting:boolean=false;
@Input() isRemovingAll:boolean=false;
@Input() deleteTask:string="";
@Input() task:string = ""


 closeModalInside(){
    this.close.emit()
  }

  //check if Enter is pressed then proceed to save
  onKeydown(event: KeyboardEvent) {   
    if (event.key==='Enter') {
      if(this.task.length ){
        this.saveEditInside()
      }
    }
  }
  saveEditInside(){
    this.save.emit(this.task)
  }
  onDelete(){
    this.delete.emit()
  }
  onRemoveAll(){
    this.removeAll.emit()
  }

}
