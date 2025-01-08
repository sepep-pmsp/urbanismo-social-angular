import { NgClass } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-hold',
  imports: [NgClass],
  templateUrl: './sticky-hold.component.html',
  styleUrl: './sticky-hold.component.scss'
})
export class StickyHoldComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  img_sticky = 'assets/icons/logo.svg';
  isStickyActive = false; 

  private stickyPoint: number = 0; 

  ngOnInit(): void {
    this.calculateStickyPoint();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateStickyPoint();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isStickyActive = window.scrollY >= this.stickyPoint;
  }

  private calculateStickyPoint(): void {
    if (this.isHomePage) {
      const headerElement = document.querySelector('.header-div');
      this.stickyPoint = headerElement
        ? headerElement.getBoundingClientRect().bottom + window.scrollY
        : 0;
    } else {
      this.stickyPoint = 0;
    }
  }
}
