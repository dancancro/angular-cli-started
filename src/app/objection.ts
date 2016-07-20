import { RebuttalModel } from './rebuttal';

export interface ObjectionModel {
    id: number; 
    name: string; 
    rebuttals?: RebuttalModel[];
    imgHref?: string;
    imgSrc?: string;
    reordered?: boolean;
    star?: boolean
}