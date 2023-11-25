import { PageHeader } from '@/components/layout';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProductForm } from '../../components';

export const Component = (): JSX.Element => {
  const { t } = useTranslation('createProduct');

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Cadastrar Produto')} backButtonLink="/products" />
        <ProductForm />
      </Space>
    </Card>
  );
};
