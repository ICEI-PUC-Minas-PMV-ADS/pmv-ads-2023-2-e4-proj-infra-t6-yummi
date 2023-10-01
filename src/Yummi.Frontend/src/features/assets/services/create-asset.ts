import { httpClient } from '@/config/libs';
import {
  IAsset,
  IAssetSpecifications,
  StatusEnum
} from '@/features/assets/entities';

export type CreateAssetDto = {
  model: string;
  name: string;
  maxTemp?: number | null;
  power?: number | null;
  rpm?: number | null;
  status: StatusEnum;
  unitId: number;
  assignedUserIds: number[];
  companyId: number;
};

export const mapPayloadToAsset = (payload: CreateAssetDto) => {
  const { maxTemp, power, rpm } = payload;

  const specifications: IAssetSpecifications = {
    maxTemp,
    power,
    rpm
  };

  return {
    ...payload,
    specifications
  };
};

export const createAsset = async (payload: CreateAssetDto): Promise<IAsset> => {
  const { data } = await httpClient.post<IAsset>(
    '/assets',
    mapPayloadToAsset(payload)
  );
  return data;
};
