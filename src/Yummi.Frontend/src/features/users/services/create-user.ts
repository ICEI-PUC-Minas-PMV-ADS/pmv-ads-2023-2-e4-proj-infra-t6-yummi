import { httpClient } from '@/config/libs';
import { IUser } from '../entities';

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const createUser = async (payload: CreateUserDto): Promise<IUser> => {
  const { data } = await httpClient.post<IUser>('/users', payload);
  return data;
};
