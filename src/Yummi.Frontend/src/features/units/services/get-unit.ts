import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IUnit } from '../entities';

export const getUnit = async (id: number): Promise<IUnit | null> => {
  try {
    const { data } = await httpClient.get<IUnit>(`/units/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetUnit = (id: number) => {
  return useQuery(['get-unit', id], () => getUnit(id));
};
