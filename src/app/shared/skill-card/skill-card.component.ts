import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  imageUrl  = input.required<string>();
  imageName = input.required<string>();
  imageAlt = input.required<string>();
}
