import { ObjectionModel } from '../objection.model';

// import  persistState  from 'redux-localstorage/PersistState';
// export const enhancers = [
//   persistState('objections$', { key: 'ng2-redux/examples/counter' })
// ];

export interface RootState {
  objections$: ObjectionModel[];
};