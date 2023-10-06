import { httpClient } from '@/config/libs';
import { IUnit } from '@/features/units/entities';
import { CreateUnitDto } from './create-unit';

export const updateUnit = async (
  id: number,
  payload: CreateUnitDto
): Promise<IUnit> => {
  const { data } = await httpClient.patch<IUnit>(`/units/${id}`, payload);
  return data;
};
