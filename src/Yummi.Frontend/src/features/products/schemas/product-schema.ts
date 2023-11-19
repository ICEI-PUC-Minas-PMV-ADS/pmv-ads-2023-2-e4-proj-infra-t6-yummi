import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateProductDto } from '../services';

export const productSchema = (t: TFunction) =>
  validations(t).Object<CreateProductDto>({
    name: validations(t).String(),
    category: validations(t).String(),
    description: validations(t).String(),
    price: validations(t).Number(),
    image: validations(t).String(),
  });
