import { Component } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { HorizontalLineComponent } from "../shared/horizontal-line/horizontal-line.component";

@Component({
  selector: 'app-experience',
  imports: [HeadingComponent, HorizontalLineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
