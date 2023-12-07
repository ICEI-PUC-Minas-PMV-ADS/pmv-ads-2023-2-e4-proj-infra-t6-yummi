import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateUserDto } from '../services';

export const userSchema = (t: TFunction) =>
  validations(t).Object<CreateUserDto>({
    name: validations(t).String(),
    login: validations(t).String(),
    password: validations(t).String(),
    perfil: validations(t).Number(),
  });
