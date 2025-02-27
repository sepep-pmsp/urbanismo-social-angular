import { NgIf } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';

@Component({
  selector: 'app-navigation',
  imports: [NgIf, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  isMenuActive = false;

  private MenuPoint: number = 0;

  constructor(
    @Inject(WINDOW) private window: Window | null
  ) { }

  ngOnInit(): void {
    this.updateMenuVisibility();
    setTimeout(() => this.updateMenuVisibility(), 0);
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