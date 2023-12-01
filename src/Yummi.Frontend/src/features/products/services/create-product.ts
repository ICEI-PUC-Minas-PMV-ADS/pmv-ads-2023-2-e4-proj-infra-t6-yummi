import { httpClient } from '@/config/libs';
import { IProduct } from '@/features/products/entities';
import { RcFile, UploadFile } from 'antd/es/upload';

export type CreateProductDto = {
  name: string;
  category: string;
  description: string;
  price: number;
  image: UploadFile;
};

export const createProduct = async (payload: CreateProductDto): Promise<IProduct> => {

  const formData = new FormData();
  formData.append("Name", payload.name);
  formData.append("Category", payload.category);
  formData.append("Description", payload.description);
  formData.append("Price", payload.price.toString().replace(".", ","));
  formData.append("Image", payload.image["file"] as RcFile);

  const { data } = await httpClient.post<IProduct>('/api/Product/', formData);

  return data;
};
