import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task=[
    {
      taskName:"implementing login feature",
      id:1,
      hour:10
    },
    {
      taskName:"API Integration",
      id:2,
      hour:10
    },
    {
      taskName:"implementing sign up feature",
      id:3,
      hour:10
    }
  ]

  constructor() { }

  getTask()
  {
    return this.task;
  }
}
