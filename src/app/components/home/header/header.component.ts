import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  header_logo = [
    { logo_header: 'assets/images/logo-urbanis-complet.svg' }
  ];
}
