import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loadTask();
  }

  title = 'ToDo';
  newTask: any = '';
  editTask: any = '';
  deleteTask: any = '';
  public taskObject: any[] = [];

  isEditing: boolean = false;
  isDeleting: boolean = false;
  isRemovingAll: boolean = false;
  editId: number = 0;
  deleteId: number = 0;

  // add button beside input form from task-form component
  //taking data (newTask) from task-form component
  onAdd(newTask: any) {
    this.taskObject.push(newTask);
    setTimeout(() => {
      newTask.isNew = false;
      this.saveTask();
    }, 500);
  }

  // edit button on task-list component
  handleEdit(ids: number) {
    this.isEditing = true;
    this.editId = ids;
    this.taskObject.filter((elem) => {
      if (elem.id == ids) {
        this.editTask = elem.newTask; // editTask will have task item data which will be displayed on editing area inside edit Modal
      }
      return elem.id == ids;
    });
  }
  // delete button on task-list component
  handleDelete(ids: number) {
    this.isDeleting = true;
    this.deleteId = ids;
    this.taskObject.filter((item: any) => {
      if (item.id == ids) {
        this.deleteTask = item.newTask; // deleteTask will have task item data which will be displayed on delete alert Modal
      }
    });
  }

  //edit modal save button
  saveEdit(data: string) {
    if (this.editTask !== data.trim()) {
      //check if there is any change in editarea then only it save the change otherwise it alerts user for chng

      this.editTask = data;
      this.newTask = this.editTask;
      this.taskObject.map((elem) => {
        if (elem.id == this.editId) {
          elem.newTask = this.editTask;
          elem.isNew = true;
          setTimeout(() => {
            elem.isNew = false;
          }, 500);
        }
      });
      this.newTask = '';
      this.saveTask();
      this.isEditing = false;
    } else alert('edit something then Save');
  }

  closeModal() {
    this.isEditing = false;
    this.isDeleting = false;
    this.isRemovingAll = false;
  }

  onDelete() {
    this.taskObject = this.taskObject.filter((item: any) => {
      return item.id != this.deleteId;
    });
    this.saveTask();
    this.isDeleting = false;
  }

  saveTask() {
    localStorage.setItem('taskObject', JSON.stringify(this.taskObject));
  }

  loadTask() {
    const taskObject: any = localStorage.getItem('taskObject');
    if (taskObject) {
      this.taskObject = JSON.parse(taskObject);
    } else {
      this.taskObject = []; // Initialize as an empty array if nothing is in localStorage
    }
  }
  removeTask() {
    this.isRemovingAll = true;
  }

  deleteAllData() {
    this.taskObject = [];
    this.isRemovingAll = false;
  }
}
