import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';
import { useQuery } from '@tanstack/react-query';

export const listAssets = async (search?: string): Promise<IAsset[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<IAsset[]>(`/assets?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListAssets = (search?: string) => {
  return useQuery(['list-assets', search], () => listAssets(search));
};
