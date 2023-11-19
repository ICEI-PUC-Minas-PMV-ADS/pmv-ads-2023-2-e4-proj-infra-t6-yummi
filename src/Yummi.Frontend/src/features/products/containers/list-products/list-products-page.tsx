import { PageHeader } from '@/components/layout';
import { useDeleteProduct } from '@/features/products/hooks';
import { useListProducts } from '@/features/products/services';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ListProductsTable } from './components/list-products-table';

export const Component = () => {
  const { t } = useTranslation('listProducts');
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListProducts(search);
  const { deleteModal, onDelete } = useDeleteProduct();

  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full" size={24}>
        <PageHeader
          title={t('Produtos Cadastrados')}
          actions={
            <Link to="create">
              <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
                {t('Adicionar Produto')}
              </Button>
            </Link>
          }
        />

        <Input.Search
          placeholder={t('search-for')}
          size="large"
          allowClear
          enterButton
          className="max-w-md"
          onSearch={setSearch}
          loading={isLoading}
        />

        <ListProductsTable
          products={data}
          isLoading={isLoading}
          onDelete={onDelete}
        />

        {deleteModal}
      </Space>
    </Card>
  );
};
