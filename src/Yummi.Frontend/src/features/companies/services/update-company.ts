import { httpClient } from '@/config/libs';
import { ICompany } from '@/features/companies/entities';
import { CreateCompanyDto } from './create-company';

export const updateCompany = async (
  id: number,
  payload: CreateCompanyDto
): Promise<ICompany> => {
  const { data } = await httpClient.patch<ICompany>(
    `/companies/${id}`,
    payload
  );
  return data;
};
