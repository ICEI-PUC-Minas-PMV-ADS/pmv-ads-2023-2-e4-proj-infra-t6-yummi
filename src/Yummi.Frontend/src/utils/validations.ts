import { TFunction } from 'i18next';
import {
  AnyObject,
  ISchema,
  ObjectSchema,
  array,
  mixed,
  number,
  object,
  string
} from 'yup';

type ObjectShape<T extends AnyObject> = {
  [key in keyof T]: ISchema<T[key]>;
};

type ObjectReturn<T extends AnyObject> = ObjectSchema<T, AnyObject, any, ''>;

const requiredKey = 'validations:required-field';

export const validations = (t: TFunction) => ({
  String: () => {
    return string().required(t(requiredKey));
  },
  StringArray: () => {
    return array()
      .of(string().required(t(requiredKey)))
      .min(1, t(requiredKey))
      .required(t(requiredKey));
  },
  Email: () => {
    return string()
      .email(t('validations:valid-email'))
      .required(t(requiredKey));
  },
  Number: () => {
    return number().required(t(requiredKey));
  },
  Nullable: () => {
    return string();
  },
  NullableNumber: () => {
    return number();
  },
  NumberArray: () => {
    return array()
      .of(number().required())
      .min(1, t(requiredKey))
      .required(t(requiredKey));
  },
  Enum: <T extends string>(values: T[]) => {
    return string().oneOf(values).required(t(requiredKey));
  },
  Object: <T extends AnyObject>(fields: ObjectShape<T>): ObjectReturn<T> => {
    return object(fields) as unknown as ObjectReturn<T>;
  },
  Conditional: <T>(
    fieldsNames: string[],
    validator: (fieldsValues: any[]) => ISchema<T>
  ) => {
    return mixed().when(fieldsNames, validator);
  }
});
