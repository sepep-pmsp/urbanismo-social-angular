import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-hold',
  imports: [NgClass],
  templateUrl: './sticky-hold.component.html',
  styleUrl: './sticky-hold.component.scss'
})
export class StickyHoldComponent {
  @Input() isHomePage: boolean = false;
  img_sticky = 'assets/icons/logo.svg';
}
