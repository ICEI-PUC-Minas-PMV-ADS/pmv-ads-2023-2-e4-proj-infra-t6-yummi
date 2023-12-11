import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditProduct } from '@/features/products/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductForm, NotFoundState } from '../../components';

export const Component = (): JSX.Element => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('createProduct');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditProduct(String(id));

  if (isLoading) {
    return <LoadingState />;
  }

  if (!initialValues) {
    return <NotFoundState />;
  }

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Editar Produto')} backButtonLink={`/products/${id}`} />
        <ProductForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/products')}
          control={control}
          isSubmitting={isSubmitting}
          initialValues={initialValues}
        />
      </Space>
    </Card>
  );
};
