import { httpClient } from '@/config/libs';
import { IUser } from '../entities';

export type CreateUserDto = {
  name: string;
  login: string;
  password: string;
  perfil: number;
};

export const createUser = async (payload: CreateUserDto): Promise<IUser> => {
  const { data } = await httpClient.post<IUser>('/api/User/', payload);
  return data;
};
