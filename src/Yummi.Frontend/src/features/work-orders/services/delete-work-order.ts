import { httpClient } from '@/config/libs';
import { IWorkOrder } from '../entities';

export const deleteWorkOrder = async (id: string): Promise<IWorkOrder> => {
  const { data } = await httpClient.delete<IWorkOrder>(`/api/Pedidos${id}`);

  return data;
};
