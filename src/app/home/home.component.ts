import { Component } from '@angular/core';
import { ProjectService } from "../projects/project-service"

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly projects = ProjectService.projects
}