import { httpClient } from '@/config/libs';
import { IUser } from '../entities';
import { CreateUserDto } from './create-account';

export const updateUser = async (id: number, payload: CreateUserDto): Promise<IUser> => {
  const { data } = await httpClient.patch<IUser>(`/api/User${id}`, payload);
  return data;
};
