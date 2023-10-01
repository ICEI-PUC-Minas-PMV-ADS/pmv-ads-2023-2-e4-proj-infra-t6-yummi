import { httpClient } from '@/config/libs';
import { IUser } from '../entities';
import { CreateUserDto } from './create-user';

export const updateUser = async (
  id: number,
  payload: CreateUserDto
): Promise<IUser> => {
  const { data } = await httpClient.patch<IUser>(`/users/${id}`, payload);
  return data;
};
