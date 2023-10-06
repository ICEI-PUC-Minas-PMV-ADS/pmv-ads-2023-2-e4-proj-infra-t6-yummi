import { httpClient } from '@/config/libs';
import { IUnit } from '../entities';

export const deleteUnit = async (id: number): Promise<IUnit> => {
  const { data } = await httpClient.delete<IUnit>(`/units/${id}`);

  return data;
};
