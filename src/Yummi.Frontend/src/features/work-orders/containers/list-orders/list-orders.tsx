import { PageHeader } from '@/components/layout';
import { Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteWorkOrder } from '../../hooks';
import { useListWorkOrders } from '../../services';
import { ListOrdersTable } from './components';

export const Component = () => {
  const { t } = useTranslation('workOrders');
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListWorkOrders(search);
  const { deleteModal, onDelete } = useDeleteWorkOrder();

  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full" size={24}>
        <PageHeader
          title={t('Pedidos')}
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

        <ListOrdersTable
          orders={data}
          isLoading={isLoading}
          onDelete={onDelete}
        />

        {deleteModal}
      </Space>
    </Card>
  );
};
