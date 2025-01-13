import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GovernancaComponent } from './components/pages/governanca/governanca.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full' , component: HomePageComponent },
    { path: 'sobre-nos', component: AboutComponent },
    { path: 'governanca', component: GovernancaComponent },
];
