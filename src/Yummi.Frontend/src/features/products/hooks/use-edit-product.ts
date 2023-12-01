import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../entities';
import { productSchema } from '../schemas';
import {
  CreateProductDto,
  getProduct,
  updateProduct,
  useGetProduct
} from '../services';

export const useEditProduct = (id: string) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetProduct(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(productSchema(t)),
    defaultValues: async () => {
      const product = await queryClient.fetchQuery<IProduct>(
        ['get-product', id],
        () => getProduct(id) as Promise<IProduct>
      );
      return product;
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateProductDto) => updateProduct(id, data),
    onSuccess: product => {
      navigate(`/products/${product.id}`);
      queryClient.invalidateQueries(['list-products']);
      queryClient.invalidateQueries(['get-product']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    initialValues: data && data,
    isSubmitting,
    isLoading
  };
};
