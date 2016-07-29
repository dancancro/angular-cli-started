import Immutable = require('immutable');
import { ObjectionModel } from './objection';
import { ObjectionAction } from './actions';

export const FETCH_OBJECTIONS_OK = "FETCH_OBJECTIONS_OK";
export const ADD_OBJECTION = "ADD_OBJECTION";

export default function objectionReducer(
     state: Immutable.List<ObjectionModel> = Immutable.List<ObjectionModel>(), 
     action: ObjectionAction) {
  switch (action.type) {
    case FETCH_OBJECTIONS_OK:
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    case ADD_OBJECTION:
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    case 'REMOVE':
      return state.delete(findIndexById(state, action));
    case 'STAR':
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