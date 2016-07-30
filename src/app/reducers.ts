
import Immutable = require('immutable');
import { ObjectionAction } from './actions';
import { ObjectionModel } from './objection';

import { combineReducers } from 'redux';
import  objectionReducer  from './objection.reducer';
import  errorReducer  from './error.reducer';

export const rootReducer = combineReducers({
    objections: objectionReducer,
    error: errorReducer
});