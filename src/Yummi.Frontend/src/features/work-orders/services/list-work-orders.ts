import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IWorkOrder } from '../entities';

export const listWorkOrders = async (
  search?: string
): Promise<IWorkOrder[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<IWorkOrder[]>(
      `/workorders?${params}`
    );
    return data;
  } catch (error) {
    return [];
  }
};

export const useListWorkOrders = (search?: string) => {
  return useQuery(['list-workorders', search], () => listWorkOrders(search));
};
