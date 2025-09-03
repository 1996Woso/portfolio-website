import { Component } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { HorizontalLineComponent } from "../shared/horizontal-line/horizontal-line.component";
import { DetailsComponent } from "../shared/details/details.component";

@Component({
  selector: 'app-education',
  imports: [HeadingComponent, HorizontalLineComponent, DetailsComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
