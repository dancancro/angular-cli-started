import { ObjectionModel } from './objection.model';
import { ObjectionActions } from './+list/objection/objection.actions';
import { ListActions } from './+list/list.actions'
import { OBJECTION_EXPANDED, ALL_EXPANDED, ALL_COLLAPSED, EDITABLE_TOGGLED } from './constants';

export interface ObjectionUIState {
  id: number;
  name: string;
  star: boolean;
  link: string;
  expanded: boolean
}

const objectionInitState: ObjectionUIState = {
  id: 0,
  name: '',
  star: false,
  link: '',
  expanded: false
};

export default function (state = [], action: any) {
  switch (action.type) {
    case OBJECTION_EXPANDED:
    case ALL_EXPANDED:
    case ALL_COLLAPSED:
    case EDITABLE_TOGGLED:
    // this.editable = !this.editable;
    // this.options.disabled = !this.options.disabled;
    default:
      return state;
  }
}

function findIndexById(state, action) {
  return state.findIndex((objection) => objection.id === action.id);
}




// function findIndexById(state, action) {
//   return state.findIndex((objection) => objection.id === action.id);
// }


    // case REMOVE_OBJECTION:    // I don't think we want this feature
    //   return state.delete(findIndexById(state, action));

      // return (<any>state).update(findIndexById(state, action), (objection) => {
      //   return {
      //     id: objection.id,
      //     name: objection.name,
      //     star: objection.star,
      //     link: objection.link,
      //     rebuttals: objection.rebuttals,
      //     expanded: true
      //   };
      // });
