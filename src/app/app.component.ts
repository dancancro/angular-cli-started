import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { NgRedux } from 'ng2-redux';
import { rootReducer } from './reducers';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, NgRedux]
})
export class AppComponent {
  title = 'app works!';

  constructor(private ngRedux: NgRedux<any>) {
    this.ngRedux.configureStore(rootReducer, {});
  }
}
