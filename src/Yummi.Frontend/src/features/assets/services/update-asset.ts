import { httpClient } from '@/config/libs';
import { IAsset } from '@/features/assets/entities';
import { CreateAssetDto, mapPayloadToAsset } from './create-asset';

export const updateAsset = async (
  id: number,
  payload: CreateAssetDto
): Promise<IAsset> => {
  const { data } = await httpClient.patch<IAsset>(
    `/assets/${id}`,
    mapPayloadToAsset(payload)
  );
  return data;
};

export const mapAssetToPayload = (asset: IAsset): CreateAssetDto => {
  const { specifications } = asset;

  const { maxTemp, power, rpm } = specifications;

  return {
    ...asset,
    maxTemp,
    power,
    rpm
  };
};
