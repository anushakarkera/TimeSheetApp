import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  // source
  tasks;

  selectedTasks = []

  taskwithflag:any;
  constructor(private service:TaskService) {
    this.tasks=service.getTask();
    this.taskwithflag=this.tasks;
   }

  ngOnInit() {}

  onTaskSelected(index, task) {
    console.log(index);
    // this.taskwithflag[index].
  }

}
