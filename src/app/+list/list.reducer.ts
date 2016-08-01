// import Immutable = require('immutable');
import { ObjectionModel } from '../objection.model';
import { ListActions } from './list.actions';

export default (state = [], action: any) => {

  switch (action.type) {
    case ListActions.FETCH_OBJECTIONS_OK:
      console.log("listreducer.payload" + action.payload);
      return [ ...action.payload ];
    case ListActions.ADD_OBJECTION:
      //do something here
      return state;
    default:
      return state;
  }
}

// function findIndexById(state, action) {
//   return state.findIndex((objection) => objection.id === action.id);
// }


    // case REMOVE_OBJECTION:    // I don't think we want this feature
    //   return state.delete(findIndexById(state, action));