import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { ICompany } from '../entities';

export const listCompanies = async (search?: string): Promise<ICompany[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<ICompany[]>(`/companies?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListCompanies = (search?: string) => {
  return useQuery(['list-companies', search], () => listCompanies(search));
};
