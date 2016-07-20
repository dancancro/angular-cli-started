
import Immutable = require('immutable');
import { ObjectionAction } from './actions';
import { ObjectionModel } from './objection';

export function reducer(state: Immutable.List<ObjectionModel> = Immutable.List<ObjectionModel>(), action: ObjectionAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    case 'REMOVE':
      return state.delete(findIndexById());
    case 'STAR':
      return (<any>state).update(findIndexById(), (objection) => {
        return {
          id: objection.id,
          name: objection.name,
          star: !objection.star
        };
      });
    default:
      return state;
  }

  function findIndexById() {
    return state.findIndex((objection) => objection.id === action.id);
  }
}