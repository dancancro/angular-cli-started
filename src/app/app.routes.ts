import { provideRouter, RouterConfig }  from '@angular/router';
import { ListRoutes }       from './+list/list.routes';
import { LoginRoutes,
         AUTH_PROVIDERS }     from './login.routes';
import { CanDeactivateGuard } from './interfaces';
export const routes: RouterConfig = [
  ...ListRoutes,
  ...LoginRoutes
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];