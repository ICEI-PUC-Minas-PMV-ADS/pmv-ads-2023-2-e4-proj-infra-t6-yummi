import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../entities';

export const getUser = async (id: number): Promise<IUser | null> => {
  try {
    const { data } = await httpClient.get<IUser>(`/api/User/authenticate${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetUser = (id: number) => {
  return useQuery(['/api/User/authenticate', id], () => getUser(id));
};
