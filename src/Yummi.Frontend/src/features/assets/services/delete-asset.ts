import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';

export const deleteAsset = async (id: number): Promise<IAsset> => {
  const { data } = await httpClient.delete<IAsset>(`/assets/${id}`);

  return data;
};
