import { httpClient } from '@/config/libs';
import { ICompany } from '../entities';

export const deleteCompany = async (id: number): Promise<ICompany> => {
  const { data } = await httpClient.delete<ICompany>(`/companies/${id}`);

  return data;
};
