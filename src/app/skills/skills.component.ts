import { Component, inject } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { HorizontalLineComponent } from "../shared/horizontal-line/horizontal-line.component";
import { DetailsComponent } from "../shared/details/details.component";
import { SkillsService } from '../_services/skills.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [HeadingComponent, ImageCardComponent, HorizontalLineComponent, DetailsComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsService = inject(SkillsService);
  databaseSkills  = this.skillsService.getDatabases();
}
