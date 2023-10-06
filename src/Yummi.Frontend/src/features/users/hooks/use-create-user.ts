import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { userSchema } from '../schemas';
import { createUser } from '../services';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(userSchema(t))
  });

  const { mutate, isLoading } = useMutation(createUser, {
    onSuccess: () => {
      navigate(`/users`);
      queryClient.invalidateQueries(['list-users']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
