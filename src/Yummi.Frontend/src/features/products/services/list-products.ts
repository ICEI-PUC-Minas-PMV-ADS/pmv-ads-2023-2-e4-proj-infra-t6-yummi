import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';
import { useQuery } from '@tanstack/react-query';

export const listProducts = async (search?: string): Promise<IProduct[]> => {
  const params = new URLSearchParams();
  if (search) {
    params.append('q', search);
  }

  try {
    const { data } = await httpClient.get<IProduct[]>(`/api/Product?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListProducts = (search?: string) => {
  return useQuery(['/api/Product', search], () => listProducts(search));
};
