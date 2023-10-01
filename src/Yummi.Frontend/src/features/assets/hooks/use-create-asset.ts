import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { assetSchema } from '../schemas';
import { createAsset } from '../services';

export const useCreateAsset = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(assetSchema(t))
  });

  const { mutate, isLoading } = useMutation(createAsset, {
    onSuccess: () => {
      navigate(`/assets`);
      queryClient.invalidateQueries(['list-assets']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
