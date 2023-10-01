import { httpClient } from '@/config/libs';
import { IWorkOrder } from '../entities';
import { CreateWorkOrderDto } from './create-work-order';

export const updateWorkOrder = async (
  id: number,
  payload: CreateWorkOrderDto
): Promise<IWorkOrder> => {
  const { data } = await httpClient.patch<IWorkOrder>(
    `/workorders/${id}`,
    payload
  );
  return data;
};

export const mapOrderToPayload = (
  workOrder: IWorkOrder
): CreateWorkOrderDto => {
  return {
    ...workOrder,
    checklist: workOrder.checklist.map(task => task.task)
  };
};
