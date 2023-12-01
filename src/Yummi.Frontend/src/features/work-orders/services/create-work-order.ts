import { httpClient } from '@/config/libs';
import { IWorkOrder, OrderStatus } from '../entities';

export type CreateWorkOrderDto = {
  assetId: number;
  assignedUserIds: number[];
  title: string;
  description: string;
  checklist: string[];
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
    '/api/Pedidos',
    mapPayloadToOrder(payload)
  );
  return data;
};
