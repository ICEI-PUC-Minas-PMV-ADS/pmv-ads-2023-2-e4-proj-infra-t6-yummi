import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../entities';
import { userSchema } from '../schemas';
import { CreateUserDto, getUser, updateUser, useGetUser } from '../services';

export const useEditUser = (id: number) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetUser(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(userSchema(t)),
    defaultValues: async () => {
      const user = await queryClient.fetchQuery<IUser>(
        ['get-user', id],
        () => getUser(id) as Promise<IUser>
      );
      return user;
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateUserDto) => updateUser(id, data),
    onSuccess: () => {
      navigate(`/users`);
      queryClient.invalidateQueries(['list-users']);
      queryClient.invalidateQueries(['get-user']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    initialValues: data,
    isSubmitting,
    isLoading
  };
};
