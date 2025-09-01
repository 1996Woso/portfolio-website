import { Component } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { HorizontalLineComponent } from "../shared/horizontal-line/horizontal-line.component";

@Component({
  selector: 'app-education',
  imports: [HeadingComponent, HorizontalLineComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
