import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IWorkOrder } from '../entities';

export const getWorkOrder = async (id: number): Promise<IWorkOrder | null> => {
  try {
    const { data } = await httpClient.get<IWorkOrder>(`/workorders/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetWorkOrder = (id: number) => {
  return useQuery(['get-workorder', id], () => getWorkOrder(id));
};
