import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';

export type CreateAssetDto = {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export const mapAssetToPayload = (asset: IAsset): CreateAssetDto => {
  return {
    name: asset.name,
    category: asset.category,
    description: asset.description,
    price: asset.price,
    image: asset.image,
  };
};

export const createAsset = async (payload: CreateAssetDto): Promise<IAsset> => {
  const { data } = await httpClient.post<IAsset>('/assets', payload);
  return data;
};
