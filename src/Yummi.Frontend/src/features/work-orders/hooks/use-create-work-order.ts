import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { workOrderSchema } from '../schemas';
import { createWorkOrder } from '../services';

export const useCreateWorkOrder = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(workOrderSchema(t))
  });

  const { mutate, isLoading } = useMutation(createWorkOrder, {
    onSuccess: () => {
      navigate(`/workorders`);
      queryClient.invalidateQueries(['list-workorders']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
