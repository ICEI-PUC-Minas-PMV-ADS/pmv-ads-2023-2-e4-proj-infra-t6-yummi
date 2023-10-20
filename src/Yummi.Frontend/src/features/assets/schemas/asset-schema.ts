import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateAssetDto } from '../services';

export const assetSchema = (t: TFunction) =>
  validations(t).Object<CreateAssetDto>({
    name: validations(t).String(),
    category: validations(t).String(),
    description: validations(t).String(),
    price: validations(t).Number(),
    image: validations(t).String(),
  });
