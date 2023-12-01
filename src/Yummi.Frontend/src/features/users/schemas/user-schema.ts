import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { CreateUserDto } from '../services';

export const userSchema = (t: TFunction) =>
  validations(t).Object<CreateUserDto>({
    name: validations(t).String(),
    email: validations(t).Email(),
    password: validations(t).String(),
    confirmPassword: validations(t).String(),
    image: validations(t).String()
  });
