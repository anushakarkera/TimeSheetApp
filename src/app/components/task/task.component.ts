import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
@Input() Task;
@Output() selectedProjectId = new EventEmitter();
selected=false;
  constructor() { }

  ngAfterContentInit() {
    console.log(this.Task)
  }

  onProjectSelected(){
    this.selected=!this.selected;
    if(this.selected)
    this.selectedProjectId.emit(this.Task.id);
    else
    this.selectedProjectId.emit(null)
  }


}
