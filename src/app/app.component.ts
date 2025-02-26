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

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 🚀 Agora funciona!
      }
    });
  }
}
