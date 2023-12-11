export interface IWorkOrder {
  id: string;
  assetId: number;
  assignedUserIds: number[];
  title: string;
  description: string;
  checklist: IWorkOrderCheckList[];
  status: OrderStatus;
}

export interface IWorkOrderCheckList {
  completed: boolean;
  task: string;
}

export enum OrderStatus {
  Completed = 'completed',
  InProgress = 'in progress',
  OnHold = 'on hold',
  Opened = 'opened'
}
