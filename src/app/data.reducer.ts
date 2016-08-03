// import Immutable = require('immutable');
import { ObjectionModel } from './objection.model';
import { ListActions } from './+list/list.actions';
import { ObjectionActions } from './+list/objection/objection.actions';
import { OBJECTION_STARRED, OBJECTIONS_FETCHED_OK, OBJECTION_ADDED } from './constants';

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
    case OBJECTION_STARRED:
      return (<any>state).update(findIndexById(state, action), (objection) => {
        return {
          id: objection.id,
          name: objection.name,
          star: !objection.star
        };
      });
    case OBJECTIONS_FETCHED_OK:
      return [ ...action.payload ];
    case OBJECTION_ADDED:
      //do something here
      return state;
    default:
      return state;
  }
}

function findIndexById(state, action) {
  return state.findIndex((objection) => objection.id === action.id);
}