import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';
import { useQuery } from '@tanstack/react-query';

export const getAsset = async (id: number): Promise<IAsset | null> => {
  try {
    const { data } = await httpClient.get<IAsset>(`/assets/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetAsset = (id: number) => {
  return useQuery(['get-asset', id], () => getAsset(id));
};
