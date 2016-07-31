import Immutable = require('immutable');
import { ObjectionModel } from './objection';
import { ObjectionAction } from './actions';

export const FETCH_OBJECTIONS_OK = "FETCH_OBJECTIONS_OK";
export const ADD_OBJECTION = "ADD_OBJECTION";
export const STAR_OBJECTION = "STAR";

export default function objectionReducer(
     state = [], action) {

console.log("action.type:" + action.type);


  switch (action.type) {
    case FETCH_OBJECTIONS_OK:
      //return state;
      return  [ ...action.payload ];
    case ADD_OBJECTION:
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    // case REMOVE_OBJECTION:    // I don't think we want this feature
    //   return state.delete(findIndexById(state, action));
    case STAR_OBJECTION:
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