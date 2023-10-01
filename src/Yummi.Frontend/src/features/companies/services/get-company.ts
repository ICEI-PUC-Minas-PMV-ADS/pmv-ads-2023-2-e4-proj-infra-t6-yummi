import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { ICompany } from '../entities';

export const getCompany = async (id: number): Promise<ICompany | null> => {
  try {
    const { data } = await httpClient.get<ICompany>(`/companies/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetCompany = (id: number) => {
  return useQuery(['get-company', id], () => getCompany(id));
};
