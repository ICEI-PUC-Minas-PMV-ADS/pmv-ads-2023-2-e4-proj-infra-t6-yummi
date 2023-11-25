import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';
import { useQuery } from '@tanstack/react-query';

export const getProduct = async (id: string): Promise<IProduct | null> => {
  try {
    const { data } = await httpClient.get<IProduct>(`/api/Product/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const useGetProduct = (id: string) => {
  return useQuery(['/api/Product', id], () => getProduct(id));
};
