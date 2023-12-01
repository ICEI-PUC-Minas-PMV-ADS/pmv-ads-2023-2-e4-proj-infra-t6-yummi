import { validations } from '@/utils';
import { TFunction } from 'i18next';
import { OrderStatus } from '../entities';
import { CreateWorkOrderDto } from '../services';

export const workOrderSchema = (t: TFunction) =>
  validations(t).Object<CreateWorkOrderDto>({
    assetId: validations(t).Number(),
    assignedUserIds: validations(t).NumberArray(),
    title: validations(t).String(),
    description: validations(t).String(),
    status: validations(t).Enum(Object.values(OrderStatus)),
    checklist: validations(t).StringArray()
  });
