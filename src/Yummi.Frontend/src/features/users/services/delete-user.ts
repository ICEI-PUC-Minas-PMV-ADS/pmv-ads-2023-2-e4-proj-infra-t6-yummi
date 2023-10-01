import { httpClient } from '@/config/libs';
import { IUser } from '../entities';

export const deleteUser = async (id: number): Promise<IUser> => {
  const { data } = await httpClient.delete<IUser>(`/users/${id}`);

  return data;
};
