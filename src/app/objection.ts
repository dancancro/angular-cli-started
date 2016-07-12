import { Rebuttal } from './rebuttal';

export interface Objection {
    "id": number; 
    "name": string; 
    "rebuttals": Rebuttal[];
    "imgHref": string;
    "imgSrc": string;
    "reordered": boolean;
}