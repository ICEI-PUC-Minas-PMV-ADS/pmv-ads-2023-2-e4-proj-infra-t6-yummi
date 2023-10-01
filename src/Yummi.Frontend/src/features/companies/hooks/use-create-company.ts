import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { companySchema } from '../schemas';
import { createCompany } from '../services';

export const useCreateCompany = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(companySchema(t))
  });

  const { mutate, isLoading } = useMutation(createCompany, {
    onSuccess: () => {
      navigate(`/companies`);
      queryClient.invalidateQueries(['list-companies']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
