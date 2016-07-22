import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Immutable = require('immutable');
import { createStore } from 'redux';
import { ObjectionAction } from './actions';
import { reducer } from './reducer';
import { ObjectionModel } from './objection';
import { DataService } from './data.service';

let storePromise;

// import promiseMiddleware from 'redux-promise';
@Injectable()
export class ObjectionStore implements OnInit {
  private sub: any;
  store: any;

  constructor(
    private dataService: DataService) {
  }

  ngOnInit() {

    // from https://github.com/thelgevold/angular-2-samples/blob/master/components/http/http.ts
    this.dataService.getObjections()
      .then((objections: any) => {
        //  this.objections = objections.json();    
        console.log("ObjectionStore.onInit:");
        console.log(objections.json());
        this.store = createStore(reducer, Immutable.List<ObjectionModel>(objections.json()));
      });

    // from http://plnkr.co/edit/z8VzCDYNrQR4KzpTVqI7?p=preview
    // this.sub = this.route
    //   .params
    //   .subscribe(params => {
    //     this.dataService.getObjections()
    //       .then(objections => {
    //       })
    //   });  
  }

  get objections(): Immutable.List<ObjectionModel> {
    return this.store.getState();
  }

  dispatch(action: ObjectionAction) {
    this.store.dispatch(action);
  }

  addObjection(newObjection: string) {
    this.objections = this.objections.push({
      id: 0,
      name: newObjection
    });
  }

  starObjection(objection: ObjectionModel) {
    const index = this.objections.indexOf(objection);
    this.objections = (<any>this.objections).update(index, (objection) => {
      return {
        id: objection.id,
        name: objection.name,
        rebuttals: objection.rebuttals,
        imgHref: objection.imgHref,
        imgSrc: objection.imgSrc,
        reordered: objection.reordered,
        star: !objection.star
      };
    });
  }
}

// export const objectionStore = new ObjectionStore(new DataService());