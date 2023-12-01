import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { productSchema } from '../schemas';
import { CreateProductDto, createProduct } from '../services';

export const useCreateProduct = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm<CreateProductDto>({
    resolver: yupResolver(productSchema(t))
  });

  const { mutate, isLoading } = useMutation(createProduct, {
    onSuccess: () => {
      navigate(`/products`);
      queryClient.invalidateQueries(['list-products']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    isSubmitting: isLoading
  };
};
