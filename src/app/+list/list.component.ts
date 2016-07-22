import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SortablejsOptions, SORTABLEJS_DIRECTIVES } from 'angular-sortablejs';
import Immutable = require('immutable');

import { ObjectionComponent } from './objection/objection.component';
import { ObjectionModel } from '../objection';
import { ObjectionStore } from '../objection-store';
import { DataService } from '../data.service';
import { addObjection } from '../actions';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  providers: [ObjectionStore, DataService],                        // I don't know why it needs DataService here
  directives: [ObjectionComponent, SORTABLEJS_DIRECTIVES]
})
export class ListComponent implements OnInit {

//  objections = Immutable.List<ObjectionModel>();
  private sub: any;
  editable: boolean = false;
  touched: boolean = false;
  expanded: boolean = false;
  options: SortablejsOptions = {
    disabled: false
  };
  objectionID: number;

  constructor(
    private objectionStore: ObjectionStore,
    private route: ActivatedRoute) {
    // from https://github.com/thelgevold/angular-2-samples/blob/master/components/http/http.ts
    // this.dataService.getObjections()
    // .then((res: any) => {
    //     this.objections = res.json();    
    // });
    // this.store.getStorePromise()
    //   .then((store: any) => {
    //     this.store = store;
    //   })

    // from http://plnkr.co/edit/z8VzCDYNrQR4KzpTVqI7?p=preview
    // this.sub = this.route
    //   .params
    //   .subscribe(params => {
    //     this.dataService.getObjections()
    //       .then(objections => {
    //         this.objections = objections.json();
    //       })
    //   });
  }

  ngOnInit() { 
  //  this.objectionStore.initialize();
    console.log("ListComponent.onInit:");
    console.log(JSON.stringify("STORE:" + this.objectionStore));
    console.log(JSON.stringify("OBJECTIONS:" + this.objectionStore.objections));
    
  }


  addObjection(objection) {
    this.objectionStore.dispatch(addObjection(objection, this.objectionID++));
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

    this.objectionStore.objections.forEach(objection => {
      objection.reordered = false;
      objection.rebuttals.forEach(rebuttal =>
        rebuttal.touched = false);
    });
    this.touched = false;
  }


}
