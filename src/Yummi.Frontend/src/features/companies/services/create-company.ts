import { httpClient } from '@/config/libs';
import { ICompany } from '../entities';

export type CreateCompanyDto = {
  name: string;
};

export const createCompany = async (
  payload: CreateCompanyDto
): Promise<ICompany> => {
  const { data } = await httpClient.post<ICompany>('/companies', payload);
  return data;
};
