import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit, OnInit {
  router = inject(Router);
  /**
   * Decorator-base (old) @ViewChild()
   */
  // @ViewChild('hamMenu') hamMenu!: ElementRef;
  // @ViewChild('offScreenMenu') offScreenMenu!: ElementRef;
  /**
   * Signal-base viewChild()
   */
  hamMenu = viewChild.required<ElementRef>('hamMenu');
  offScreenMenu = viewChild.required<ElementRef>('offScreenMenu');

  isHamMenuActive = false;
  currentRoute: string = '';
  //Persisting the selected button across reloads (using localStorage).
  clickedButton: string | null = localStorage.getItem('clickedButton');

  setBorderActive(buttonId: string): void {
    this.clickedButton = buttonId;
    localStorage.setItem('clickedButton', buttonId);
  }

  goToHome(): void {
    this.clickedButton = null;
    this.router.navigateByUrl('');
  }

  toggleHamMenu(): void {
    this.isHamMenuActive = !this.isHamMenuActive;
  }

  closeHamMenu(): void {
    this.isHamMenuActive = false;
  }
  /**Not safe */
  ngAfterViewInit(): void {
    // this.hamMenu().nativeElement.addEventListener('click', () => {
    //   this.hamMenu().nativeElement.classList.toggle('active');
    //   this.offScreenMenu().nativeElement.classList.toggle('active');
    // });

    // const navButtons = this.offScreenMenu().nativeElement.querySelectorAll('a');
    // navButtons.forEach((link: HTMLElement) => {
    //   link.addEventListener('click', () => {
    //     this.offScreenMenu().nativeElement.classList.remove('active');
    //     this.hamMenu().nativeElement.classList.remove('active');
    //   });
    // });
  }
  ngOnInit(): void {
      this.setBorderActive('');
  }

  /**
   *
   */
  constructor() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
