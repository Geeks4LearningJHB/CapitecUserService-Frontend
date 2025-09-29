import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('/assets/config.json')
  .then(response => response.json())
  .then(config => {
    // Inject config into a global window object or a service
    (window as any).__env = config;

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  })
  .catch(err => {
    console.error('Could not load config.json', err);
  });
