import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IUnit } from '../entities';
import { unitSchema } from '../schemas';
import { CreateUnitDto, getUnit, updateUnit, useGetUnit } from '../services';

export const useEditUnit = (id: number) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetUnit(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(unitSchema(t)),
    defaultValues: async () => {
      const unit = await queryClient.fetchQuery<IUnit>(
        ['get-unit', id],
        () => getUnit(id) as Promise<IUnit>
      );
      return unit;
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateUnitDto) => updateUnit(id, data),
    onSuccess: () => {
      navigate(`/units`);
      queryClient.invalidateQueries(['list-units']);
      queryClient.invalidateQueries(['get-unit']);
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
