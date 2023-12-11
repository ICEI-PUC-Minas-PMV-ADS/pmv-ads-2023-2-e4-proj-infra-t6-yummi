import { httpClient } from '@/config/libs';
import { IUser } from '../entities';

export const deleteUser = async (id: string): Promise<IUser> => {
  const { data } = await httpClient.delete<IUser>(`api/[controller]/${id}`);

  return data;
};
