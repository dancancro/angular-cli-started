// import Immutable = require('immutable');
import { ObjectionModel } from '../../objection.model';
import { ObjectionActions } from './objection.actions';

export interface ObjectionState {
  id: number;
  name: string;
  star: boolean;
}

const objectionInitState: ObjectionState = {
  id: 0,
  name: '',
  star: false
};

export default function (state = [], action: any) {
  switch (action.type) {
    case ObjectionActions.STAR_OBJECTION:
      return (<any>state).update(findIndexById(state, action), (objection) => {
        return {
          id: objection.id,
          name: objection.name,
          star: !objection.star
        };
      });
    default:
      return state;
  }
}

function findIndexById(state, action) {
  return state.findIndex((objection) => objection.id === action.id);
}