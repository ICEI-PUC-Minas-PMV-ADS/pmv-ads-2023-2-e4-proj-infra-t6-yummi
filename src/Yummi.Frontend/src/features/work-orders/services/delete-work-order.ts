import { httpClient } from '@/config/libs';
import { IWorkOrder } from '../entities';

export const deleteWorkOrder = async (id: number): Promise<IWorkOrder> => {
  const { data } = await httpClient.delete<IWorkOrder>(`/workorders/${id}`);

  return data;
};
