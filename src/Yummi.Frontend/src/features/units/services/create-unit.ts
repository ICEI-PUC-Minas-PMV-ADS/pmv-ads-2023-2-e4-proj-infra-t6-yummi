import { httpClient } from '@/config/libs';
import { IUnit } from '../entities';

export type CreateUnitDto = {
  name: string;
  companyId: number;
};

export const createUnit = async (payload: CreateUnitDto): Promise<IUnit> => {
  const { data } = await httpClient.post<IUnit>('/units', payload);
  return data;
};
