import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IWorkOrder } from '../entities';
import { workOrderSchema } from '../schemas';
import {
  CreateWorkOrderDto,
  getWorkOrder,
  mapOrderToPayload,
  updateWorkOrder,
  useGetWorkOrder
} from '../services';

export const useEditWorkOrder = (id: number) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetWorkOrder(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(workOrderSchema(t)),
    defaultValues: async () => {
      const order = await queryClient.fetchQuery<IWorkOrder>(
        ['get-workorder', id],
        () => getWorkOrder(id) as Promise<IWorkOrder>
      );
      return mapOrderToPayload(order);
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateWorkOrderDto) => updateWorkOrder(id, data),
    onSuccess: () => {
      navigate(`/workorders`);
      queryClient.invalidateQueries(['list-workorders']);
      queryClient.invalidateQueries(['get-workorder', id]);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    initialValues: data && mapOrderToPayload(data),
    isSubmitting,
    isLoading
  };
};
