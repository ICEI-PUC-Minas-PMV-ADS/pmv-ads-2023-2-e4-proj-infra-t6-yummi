import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../entities';

export const listUsers = async (search?: string): Promise<IUser[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<IUser[]>(`/users?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListUsers = (search?: string) => {
  return useQuery(['list-users', search], () => listUsers(search));
};
