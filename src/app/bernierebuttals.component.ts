import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { ListComponent } from './+list';

@Component({
  moduleId: module.id,
  selector: 'bernierebuttals-app',
  templateUrl: 'bernierebuttals.component.html',
  styleUrls: ['bernierebuttals.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class BernierebuttalsAppComponent {
  title = 'bernierebuttals works!';
  
  constructor() {}
}
