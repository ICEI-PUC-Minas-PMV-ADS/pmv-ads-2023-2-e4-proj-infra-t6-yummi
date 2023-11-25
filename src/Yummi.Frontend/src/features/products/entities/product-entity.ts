export interface IProduct {
  id: number;
  status: StatusEnum;
  assignedUserIds: number[];
  name: string;
  category: string;
  description: string;
  price: number;
  imagePath: string;
  unitId: number;
}

export enum StatusEnum {
  InAlert = 'InAlert',
  InDowntime = 'InDowntime',
  InOperation = 'InOperation',
  PlannedStop = 'PlannedStop',
  UnplannedStop = 'UnplannedStop'
}
