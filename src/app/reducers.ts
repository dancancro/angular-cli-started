import { combineReducers } from 'redux';
import  objectionReducer  from './+list/objection/objection.reducer';
import  listReducer  from './+list/list.reducer';
import  errorReducer  from './error.reducer';

export const rootReducer = combineReducers({
    objections: objectionReducer,
    list: listReducer,
    error: errorReducer
});