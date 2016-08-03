// Actions
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { RootState } from '../../store';
import { OBJECTION_STARRED, REBUTTAL_ADDED } from '../../constants';

@Injectable()
export class ObjectionActions {
  constructor(
    private ngRedux: NgRedux<RootState>) { }

  starObjection(id: number): void {
    this.ngRedux.dispatch({ type: OBJECTION_STARRED });
  }

  addRebuttal(name?: string, id?: number): void {
    this.ngRedux.dispatch({ type: REBUTTAL_ADDED });
  }

}


