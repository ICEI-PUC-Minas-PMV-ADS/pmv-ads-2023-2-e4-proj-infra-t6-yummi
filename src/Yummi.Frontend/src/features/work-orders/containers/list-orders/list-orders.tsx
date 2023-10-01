import { PageHeader } from '@/components/layout';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDeleteWorkOrder } from '../../hooks';
import { useListWorkOrders } from '../../services';
import { ListOrdersTable } from './components';

export const Component = () => {
  const { t } = useTranslation('workOrders', { keyPrefix: 'list-orders' });
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListWorkOrders(search);
  const { deleteModal, onDelete } = useDeleteWorkOrder();

  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full" size={24}>
        <PageHeader
          title={t('title')}
          actions={
            <Link to="create">
              <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
                {t('add-order')}
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
