import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from '../../tokens/window.token';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;

  constructor(
    @Inject(WINDOW) private window: Window | null
  ) {}

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

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private updateMenuVisibility(): void {
    if (this.window) {
      this.isMobile = this.window.innerWidth <= 425;
    }
  }
}
