// Actions
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { RootState } from '../../store';

@Injectable()
export class ObjectionActions {
  constructor(
    private ngRedux: NgRedux<RootState>) { }

  static ADD_REBUTTAL: string = "ADD_REBUTTAL";
  static STAR_OBJECTION: string = "STAR";

  starObjection(id: number): void {
    this.ngRedux.dispatch({ type: ObjectionActions.STAR_OBJECTION });
  }

  addRebuttal(name?: string, id?: number): void {
    this.ngRedux.dispatch({ type: ObjectionActions.ADD_REBUTTAL });
  }

}


