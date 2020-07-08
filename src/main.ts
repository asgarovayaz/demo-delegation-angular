import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}


const color =
  (environment.isMultiColorActive || environment.isDarkSwitchActive) && localStorage.getItem(environment.themeColorStorageKey)
    ? localStorage.getItem(environment.themeColorStorageKey)
    : environment.defaultColor;


import('./assets/css/sass/themes/delegation.' + color + '.scss').then(x => {
  localStorage.setItem(environment.themeColorStorageKey, color);
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
}).catch(() => {
  localStorage.removeItem(environment.themeColorStorageKey);
  window.location.reload();
});
