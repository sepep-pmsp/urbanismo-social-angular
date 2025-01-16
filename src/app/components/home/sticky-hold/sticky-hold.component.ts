import { DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';

@Component({
  selector: 'app-sticky-hold',
  imports: [NgClass, RouterModule],
  templateUrl: './sticky-hold.component.html',
  styleUrl: './sticky-hold.component.scss'
})
export class StickyHoldComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  img_sticky = 'assets/icons/logo.svg';
  isStickyActive = false; 

  private stickyPoint: number = 0; 

  constructor(
    @Inject(DOCUMENT) private document: Document | null,
    @Inject(WINDOW) private window: Window | null
  ) {}

  ngOnInit(): void {
    this.calculateStickyPoint();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.window) {
      this.calculateStickyPoint();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.window) {
      this.isStickyActive = this.window.scrollY >= this.stickyPoint;
    }
  }

  private calculateStickyPoint(): void {
    if (this.isHomePage && this.document && this.window) {
      const headerElement = this.document.querySelector('.header-div');
      this.stickyPoint = headerElement
        ? headerElement.getBoundingClientRect().bottom + this.window.scrollY
        : 0;
    } else {
      this.stickyPoint = 0;
    }
  }
}
