import { Component } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { SkillCardComponent } from "../shared/skill-card/skill-card.component";
import { HorizontalLineComponent } from "../shared/horizontal-line/horizontal-line.component";

@Component({
  selector: 'app-skills',
  imports: [HeadingComponent, SkillCardComponent, HorizontalLineComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
