import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { StatusEnum } from '../entities';
import { CreateAssetDto } from '../services';

export const assetSchema = (t: TFunction) =>
  validations(t).Object<CreateAssetDto>({
    model: validations(t).String(),
    name: validations(t).String(),
    maxTemp: validations(t).NullableNumber(),
    power: validations(t).NullableNumber(),
    rpm: validations(t).NullableNumber(),
    status: validations(t).Enum(Object.values(StatusEnum)),
    unitId: validations(t).Number(),
    assignedUserIds: validations(t).NumberArray(),
    companyId: validations(t).Number()
  });
