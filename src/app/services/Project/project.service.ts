import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  project=[{
    project:"SUGI",
    id:1
  },
  {
    project:"EPL",
    id:1
  }]





  constructor() { }


  getProjects(){
    return this.project;
  }

}
