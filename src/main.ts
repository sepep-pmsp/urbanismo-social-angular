import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true }))  // Ativa o modo hash
  ]
}).catch(err => console.error(err));
