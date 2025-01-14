import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GovernancaComponent } from './components/pages/governanca/governanca.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'sobre-nos', component: AboutComponent },
    { path: 'governanca', component: GovernancaComponent },
    { path: 'parceiros', component: PartnersComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
