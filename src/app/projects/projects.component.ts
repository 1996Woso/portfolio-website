import { Component, inject, OnInit } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { ProjectService } from '../_services/project.service';
import { Project } from '../_interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [HeadingComponent, ImageCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectService = inject(ProjectService);
  projects: Partial<Project>[] = this.projectService.getProjects();

}
