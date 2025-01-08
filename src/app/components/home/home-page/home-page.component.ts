import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { StickyHoldComponent } from "../sticky-hold/sticky-hold.component";
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, StickyHoldComponent, MainContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
