import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { unitSchema } from '../schemas';
import { createUnit } from '../services';

export const useCreateUnit = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(unitSchema(t))
  });

  const { mutate, isLoading } = useMutation(createUnit, {
    onSuccess: () => {
      navigate(`/units`);
      queryClient.invalidateQueries(['list-units']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
