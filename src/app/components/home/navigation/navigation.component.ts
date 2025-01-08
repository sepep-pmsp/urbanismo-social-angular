import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.updateMenuVisibility();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateMenuVisibility();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private updateMenuVisibility(): void {
    this.isMobile = window.innerWidth <= 425;
  }
}
