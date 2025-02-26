import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [NgIf, RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  isMenuActive = false;
  isHomePage: boolean = false;

  private MenuPoint: number = 0;

  constructor(
    @Inject(WINDOW) private window: Window | null,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateMenuVisibility();
    setTimeout(() => this.updateMenuVisibility(), 0);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomePage = event.url === '/';
    });
  }
  

  @HostListener('window:resize', [])
  onResize(): void {
    if (this.window) {
      this.updateMenuVisibility();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.window) {
      this.isMenuActive = this.window.scrollY >= this.MenuPoint;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private updateMenuVisibility(): void {
    if (this.window) {
      this.isMobile = this.window.innerWidth <= 425;
    }
  }
}
