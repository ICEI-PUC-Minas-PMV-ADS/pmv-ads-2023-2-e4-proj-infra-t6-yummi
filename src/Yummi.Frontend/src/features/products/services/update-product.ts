import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';
import { CreateProductDto } from './create-product';

export const updateProduct = async (id: number, payload: CreateProductDto): Promise<IProduct> => {
  const { data } = await httpClient.patch<IProduct>(`/api/Product${id}`, payload);
  return data;
};