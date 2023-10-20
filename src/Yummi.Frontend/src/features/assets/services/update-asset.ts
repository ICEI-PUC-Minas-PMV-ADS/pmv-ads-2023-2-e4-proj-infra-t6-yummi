import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';
import { CreateAssetDto } from './create-asset';

export const updateAsset = async (id: number, payload: CreateAssetDto): Promise<IAsset> => {
  const { data } = await httpClient.patch<IAsset>(`/assets/${id}`, payload);
  return data;
};