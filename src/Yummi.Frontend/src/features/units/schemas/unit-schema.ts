import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateUnitDto } from '../services';

export const unitSchema = (t: TFunction) =>
  validations(t).Object<CreateUnitDto>({
    name: validations(t).String(),
    companyId: validations(t).Number()
  });
