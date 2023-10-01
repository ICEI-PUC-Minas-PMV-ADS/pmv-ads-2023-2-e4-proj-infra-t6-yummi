import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IUnit } from '../entities';

export const listUnits = async (search?: string): Promise<IUnit[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<IUnit[]>(`/units?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListUnits = (search?: string) => {
  return useQuery(['list-units', search], () => listUnits(search));
};
