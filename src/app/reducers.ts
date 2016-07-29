
import Immutable = require('immutable');
import { ObjectionAction } from './actions';
import { ObjectionModel } from './objection';

import { combineReducers } from 'redux';
import { objectionReducer } from './objection.reducer';
import { errorReducer } from './error.reducer';

export const rootReducer = combineReducers({
    objections: objectionReducer,
    error: errorReducer
});

// export function rootReducer(state: Immutable.List<ObjectionModel> = Immutable.List<ObjectionModel>(), action: ObjectionAction) {


//   function findIndexById() {
//     return state.findIndex((objection) => objection.id === action.id);
//   }
// }