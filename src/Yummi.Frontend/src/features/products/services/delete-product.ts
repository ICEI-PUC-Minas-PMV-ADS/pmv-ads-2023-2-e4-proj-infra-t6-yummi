import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';

export const deleteProduct = async (id: number): Promise<IProduct> => {
  const { data } = await httpClient.delete<IProduct>(`/api/Product/${id}`);

  return data;
};
