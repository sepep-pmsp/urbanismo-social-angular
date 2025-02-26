import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GovernancaComponent } from './components/pages/governanca/governanca.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TerritoriosPageComponent } from './components/pages/territorios/territorios-page/territorios-page.component';
import { TerritorioPageComponent } from './components/pages/territorio/territorio-page/territorio-page.component';
import { NewsComponent } from './components/pages/news/news/news.component';
import { NewsPageComponent } from './components/pages/news/news-page/news-page.component';
import { AcervoComponent } from './components/pages/eventos/acervo/acervo.component';

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'sobre-nos', component: AboutComponent },
    { path: 'governanca', component: GovernancaComponent },
    { path: 'parceiros', component: PartnersComponent },
    { path: 'territorios', component: TerritoriosPageComponent },
    { path: 'territorio/:url', component: TerritorioPageComponent},
    { path: 'noticias', component: NewsComponent },
    { path: 'news/:url', component: NewsPageComponent },
    { path: 'eventos', component: AcervoComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
