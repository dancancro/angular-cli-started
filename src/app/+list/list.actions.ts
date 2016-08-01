// Actions
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { RootState } from '../store';

@Injectable()
export class ListActions {
  constructor( private ngRedux: NgRedux<RootState>) { }

  static FETCH_OBJECTIONS_OK: string = "FETCH_OBJECTIONS_OK";
  static FETCH_OBJECTIONS_ERROR: string = "FETCH_OBJECTIONS_ERROR";
  static ADD_OBJECTION: string = "ADD_OBJECTION";

  fetchObjections(objections): void {
    this.ngRedux.dispatch({ 
      type: ListActions.FETCH_OBJECTIONS_OK, 
      payload: objections 
    });
  }

  addObjection(name: string, id: number): void {
    this.ngRedux.dispatch({ 
      type: ListActions.ADD_OBJECTION,
      payload: {name: name, id: id}
    });
  }

  error(err): void {
    this.ngRedux.dispatch({
      type: ListActions.FETCH_OBJECTIONS_ERROR,
      error: err
    });
  }
}