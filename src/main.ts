import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { ToastyService, ToastyConfig } from 'ng2-toasty/ng2-toasty';
//import { SlimLoadingBarService } from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import { BernierebuttalsAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(BernierebuttalsAppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);