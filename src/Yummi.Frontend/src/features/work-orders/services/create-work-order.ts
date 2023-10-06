import { httpClient } from '@/config/libs';
import { IWorkOrder, OrderStatus, WorkOrderPriority } from '../entities';

export type CreateWorkOrderDto = {
  assetId: number;
  assignedUserIds: number[];
  title: string;
  description: string;
  checklist: string[];
  priority: WorkOrderPriority;
  status: OrderStatus;
};

export const mapPayloadToOrder = (payload: CreateWorkOrderDto) => {
  return {
    ...payload,
    checklist: payload.checklist.map(task => {
      return {
        completed: false,
        task
      };
    })
  };
};

export const createWorkOrder = async (
  payload: CreateWorkOrderDto
): Promise<IWorkOrder> => {
  const { data } = await httpClient.post<IWorkOrder>(
    '/workorders',
    mapPayloadToOrder(payload)
  );
  return data;
};
