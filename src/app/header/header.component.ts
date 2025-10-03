import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);

  isHamMenuActive = false;
  currentRoute: string = '';

  goToHome(): void {
    this.router.navigateByUrl('');
  }

  toggleHamMenu(): void {
    this.isHamMenuActive = !this.isHamMenuActive;
  }

  closeHamMenu(): void {
    this.isHamMenuActive = false;
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
