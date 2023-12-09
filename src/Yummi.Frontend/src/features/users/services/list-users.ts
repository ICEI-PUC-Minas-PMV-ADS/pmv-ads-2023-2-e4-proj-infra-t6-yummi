import { httpClient } from '@/config/libs';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../entities';

export const listUsers = async (name?: string, login?: string): Promise<IUser[]> => {
  const params = new URLSearchParams();
  if (name) params.append('name', name);
  if (login) params.append('login', login);

  try {
    const { data } = await httpClient.get<IUser[]>(`/api/User?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListUsers = (name?: string, login?: string) => {
  return useQuery(['/api/User', [name, login]], () => listUsers(name, login));
};
