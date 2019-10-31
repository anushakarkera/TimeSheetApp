import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/Project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.page.html',
  styleUrls: ['./project-list.page.scss'],
})
export class ProjectListPage implements OnInit {
  allTask;
  constructor(private service:ProjectService,private route:Router) {
    this.allTask=service.getProjects();
   }

   onProjectClicked(id){
this.route.navigate(["task-list",id])
   }

  

  ngOnInit() {
  }

}
