import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';

@Component({
  selector: 'app-navi-mobile',
  standalone: true,
  imports: [NgIf, RouterModule, CommonModule],
  templateUrl: './navi-mobile.component.html',
  styleUrl: './navi-mobile.component.scss'
})
export class NaviMobileComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  @Input() isHomePage: boolean = false;
  isMenuActive = false;

  private MenuPoint: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document | null,
    @Inject(WINDOW) private window: Window | null
  ) { }

  ngOnInit(): void {
    this.updateMenuVisibility();
    setTimeout(() => this.updateMenuVisibility(), 0);
    this.calculateMenuPoint();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (this.window) {
      this.updateMenuVisibility();
      this.calculateMenuPoint();
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

  private calculateMenuPoint(): void {
    if (this.isHomePage && this.document && this.window) {
      const headerElement = this.document.querySelector('.header-div');
      this.MenuPoint = headerElement
        ? headerElement.getBoundingClientRect().bottom + this.window.scrollY
        : 0;
    } else {
      this.MenuPoint = 0;
    }
  }
}
