import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SortablejsOptions, SORTABLEJS_DIRECTIVES } from 'angular-sortablejs';
import Immutable = require('immutable');
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { ObjectionComponent } from './objection/objection.component';
import { ObjectionModel } from '../objection';
import { DataService } from '../data.service';
import { addObjection } from '../actions';
import FETCH_OBJECTIONS_OK from '../objection.reducer'
import FETCH_OBJECTIONS_ERROR from '../error.reducer'

  // Magic selector from ng2-redux that makes an observable out
  // of the 'objections' property of your store.
  @Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  providers: [DataService],                        // I don't know why it needs DataService here
  directives: [ObjectionComponent, SORTABLEJS_DIRECTIVES]
})
export class ListComponent implements OnInit {
  @select('objections') objections: Observable<ObjectionModel[]>;

//  objections = Immutable.List<ObjectionModel>();
  private subscription: any;
  editable: boolean = false;
  touched: boolean = false;
  expanded: boolean = false;
  options: SortablejsOptions = {
    disabled: false
  };
  objectionID: number;

  constructor(
      private ngRedux: NgRedux<any>,
      private dataService: DataService){
  }

  ngOnInit() {
      this.subscription = this.dataService.getObjections()
         .subscribe(objections => this.ngRedux.dispatch({
             type: FETCH_OBJECTIONS_OK,
             payload: objections
         }),
         error => this.ngRedux.dispatch({
             type: FETCH_OBJECTIONS_ERROR,
             error: error
         }));
  }

  addObjection(objection) {
  //  this.objectionStore.dispatch(addObjection(objection, this.objectionID++));
  }


  setTouched() {
    this.touched = true;
  }

  goTo(id) {
    //  var y = document.getElementById(id).getBoundingClientRect().top - $('div .row')[0].getBoundingClientRect().bottom - 10;
    //  window.scrollBy(0,y);
    //  var span = $($('#' + id).parent('div')[0]).find('span')[0];
    //  toggleRebuttals(span);
  }

  toggleEditable() {
    this.editable = !this.editable;
    this.options.disabled = !this.options.disabled;
  }

  expandAll() {
    this.expanded = true;
  }

  collapseAll() {
    this.expanded = false;
  }

  saveAll() {
//    this.dataxxService.saveObjections(this.store.objections);

    // this.objectionStore.objections.forEach(objection => {
    //   objection.reordered = false;
    //   objection.rebuttals.forEach(rebuttal =>
    //     rebuttal.touched = false);
    // });
    this.touched = false;
  }


}
