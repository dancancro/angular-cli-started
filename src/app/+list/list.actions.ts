// Actions
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { RootState } from '../store';
import { OBJECTIONS_FETCHED_OK, OBJECTION_ADDED, ALL_EXPANDED, ALL_COLLAPSED, LIST_TOUCHED, OBJECTIONS_FETCHED_ERROR, EDITABLE_TOGGLED } from '../constants';

@Injectable()
export class ListActions {
  constructor( private ngRedux: NgRedux<RootState>) { }

  fetchObjections(objections): void {
    this.ngRedux.dispatch({ 
      type: OBJECTIONS_FETCHED_OK, 
      payload: objections 
    });
  }

  addObjection(): void {
    this.ngRedux.dispatch({ 
      type: OBJECTION_ADDED
    });
  }

  expandAll() {
    this.ngRedux.dispatch({
      type: ALL_EXPANDED
    })
  }

  collapseAll() {
    this.ngRedux.dispatch({
      type: ALL_COLLAPSED
    })
  }
  
  touch() {
    this.ngRedux.dispatch({
      type: LIST_TOUCHED
    })
  }
  
  toggleEditable() {
    this.ngRedux.dispatch({
      type: EDITABLE_TOGGLED
    })
  }

  error(err): void {
    this.ngRedux.dispatch({
      type: OBJECTIONS_FETCHED_ERROR,
      error: err
    });
  }
}