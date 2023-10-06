import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateCompanyDto } from '../services';

export const companySchema = (t: TFunction) =>
  validations(t).Object<CreateCompanyDto>({
    name: validations(t).String()
  });
