import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';

export type CreateProductDto = {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export const mapProductToPayload = (product: IProduct): CreateProductDto => {
  return {
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    image: product.image,
  };
};

export const createProduct = async (payload: CreateProductDto): Promise<IProduct> => {
  const { data } = await httpClient.post<IProduct>('/api/Product/', payload);
  return data;
};
