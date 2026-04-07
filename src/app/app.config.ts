import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CalculateTotalPricePipe } from './pipes/calculate-total-price-pipe';
import { provideNgxStripe } from 'ngx-stripe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideNgxStripe(),
    provideTranslateService({
      loader:provideTranslateHttpLoader({
        prefix:'/i18n/',
        suffix:'.json'
      }),
      lang:'es'
    }),
    provideAnimationsAsync(),
    CalculateTotalPricePipe
  ]
};
