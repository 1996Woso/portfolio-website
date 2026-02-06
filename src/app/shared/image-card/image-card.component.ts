import { NgStyle, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  imports: [NgStyle, NgClass],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  imageUrl  = input.required<string>();
  imageName = input.required<string>();
  imageAlt = input.required<string>();
  style = input<Record<string, string>>({});
  class = input<string>('text-center');
}
