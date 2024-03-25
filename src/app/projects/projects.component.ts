import { Component } from '@angular/core';
import { ProjectService } from "../projects/project-service"

@Component({
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects = ProjectService.projects
}