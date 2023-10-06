import { httpClient } from '@/config/libs';
import { IUser } from '../entities';

export type CreateUserDto = {
  name: string;
  companyId: number;
  unitId: number;
  email: string;
};

export const createUser = async (payload: CreateUserDto): Promise<IUser> => {
  const { data } = await httpClient.post<IUser>('/users', payload);
  return data;
};
