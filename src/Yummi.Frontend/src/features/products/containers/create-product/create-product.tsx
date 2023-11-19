import { PageHeader } from '@/components/layout';
import { useCreateProduct } from '@/features/products/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ProductForm } from '../../components';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateProduct();
  const navigate = useNavigate();
  const { t } = useTranslation('createProduct');

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Cadastrar Produto')} backButtonLink="/products" />
        <ProductForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/products')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
