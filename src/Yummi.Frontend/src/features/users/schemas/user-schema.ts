import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateUserDto } from '../services';

export const userSchema = (t: TFunction) =>
  validations(t).Object<CreateUserDto>({
    name: validations(t).String(),
    companyId: validations(t).Number(),
    unitId: validations(t).Number(),
    email: validations(t).Email()
  });
