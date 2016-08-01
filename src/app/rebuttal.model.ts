export interface RebuttalModel {
    id: number;
    shortName: string;
    longName: string;
    link?: string;
    editable?: boolean;
    touched?: boolean;
    comments?: string;
}