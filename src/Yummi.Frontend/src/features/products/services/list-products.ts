import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';
import { useQuery } from '@tanstack/react-query';

export const listProducts = async (page: number, size: number, name?: string, category?: string): Promise<IProduct[]> => {
  const params = new URLSearchParams();
  if (name) params.append('name', name);
  if (category) params.append('category', category);
  params.append('page', page.toString());
  params.append('pageSize', size.toString());

  try {
    const { data } = await httpClient.get<IProduct[]>(`/api/Product?${params}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const useListProducts = (name?: string, category?: string, page: number = 0, size: number = 10) => {
  return useQuery(['/api/Product', [name, category, page, size]], () => listProducts(page, size, name, category));
};
