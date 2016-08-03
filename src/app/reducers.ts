import { combineReducers } from 'redux';
import  dataReducer  from './data.reducer';
import  uiStateReducer  from './ui-state.reducer';
import  errorReducer  from './error.reducer';

export const rootReducer = combineReducers({
    data: dataReducer,
    uiState: uiStateReducer,
    error: errorReducer
});