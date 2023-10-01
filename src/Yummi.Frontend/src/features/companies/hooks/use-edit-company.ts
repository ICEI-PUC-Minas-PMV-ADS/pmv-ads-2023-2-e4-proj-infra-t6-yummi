import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ICompany } from '../entities';
import { companySchema } from '../schemas';
import {
  CreateCompanyDto,
  getCompany,
  updateCompany,
  useGetCompany
} from '../services';

export const useEditCompany = (id: number) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetCompany(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(companySchema(t)),
    defaultValues: async () => {
      const company = await queryClient.fetchQuery<ICompany>(
        ['get-company', id],
        () => getCompany(id) as Promise<ICompany>
      );
      return company;
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateCompanyDto) => updateCompany(id, data),
    onSuccess: () => {
      navigate(`/companies`);
      queryClient.invalidateQueries(['list-companies']);
      queryClient.invalidateQueries(['get-company']);
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
