import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  router = inject(Router);
  @ViewChild('hamMenu') hamMenu!: ElementRef;
  @ViewChild('offScreenMenu') offScreenMenu!: ElementRef;

  goToHome(): void {
    this.router.navigateByUrl('');
  }

  ngAfterViewInit(): void {
      this.hamMenu.nativeElement.addEventListener('click', () => {
        this.hamMenu.nativeElement.classList.toggle('active');
        this.offScreenMenu.nativeElement.classList.toggle('active');
      });
  }
}
