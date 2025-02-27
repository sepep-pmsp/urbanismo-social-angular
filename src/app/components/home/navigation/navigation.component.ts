import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [NgIf, RouterModule,NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  isMenuActive = false;
  isMenuOpen: boolean = false;
  @Input() isHomePage: boolean = false;

  private MenuPoint: number = 0;

  constructor(
    @Inject(WINDOW) private window: Window | null,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateMenuVisibility();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private updateMenuVisibility(): void {
    if (this.window) {
      this.isMobile = this.window.innerWidth <= 425;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private updateMenuVisibility(): void {
    if (this.window) {
      this.isMobile = this.window.innerWidth <= 768;
    }
  }
  
  @HostListener('window:resize')
  onResize(): void {
    this.updateMenuVisibility();
    if (!this.isMobile && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.window) {
      this.isMenuActive = this.window.scrollY >= this.MenuPoint;
    }
  }
}