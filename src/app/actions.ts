// Actions

export interface ObjectionAction {
  type: string;
  id: number;
  name?: string;
}

export function addObjection(name: string, id: number): ObjectionAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function starObjection(id: number): ObjectionAction {
  return {
    type: 'STAR',
    id
  };
}





export interface RebuttalAction {
  type: string;
  id: number;
  name?: string;
}

export function addRebuttal(name: string, id: number): RebuttalAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

