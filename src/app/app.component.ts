import { Component, OnInit} from '@angular/core';
import { NavigationComponent } from "./components/home/navigation/navigation.component";
import { FooterComponent } from "./components/home/footer/footer.component";
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'urbanismo-social-angular';
  isHomePage: boolean = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 🚀 Agora funciona!
      }
    });
  }
}
