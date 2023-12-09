export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
  perfil: number;
}

export enum StatusEnum {
  InAlert = 'InAlert',
  InDowntime = 'InDowntime',
  InOperation = 'InOperation',
  PlannedStop = 'PlannedStop',
  UnplannedStop = 'UnplannedStop'
}
