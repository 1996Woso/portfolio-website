import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  imports: [NgStyle],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  imageUrl  = input.required<string>();
  imageName = input.required<string>();
  imageAlt = input.required<string>();
  height = input.required<string>();
  width = input.required<string>();
}
