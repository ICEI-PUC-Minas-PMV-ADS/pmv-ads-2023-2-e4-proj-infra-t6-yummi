import { PageHeader } from '@/components/layout';
import { Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteWorkOrder } from '../../hooks';
import { useListWorkOrders } from '../../services';
import { ListOrdersTable } from './components';
import { OrderStatus } from '../../entities';

export const Component = () => {
  const { t } = useTranslation('workOrders');
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListWorkOrders(search);
  const { deleteModal, onDelete } = useDeleteWorkOrder();

  data.push(  
    { 
    id: "657657f34fadd4d1e5f3f64c",
    assetId: 5,
    assignedUserIds: [1, 2, 3],
    title: "Mesa 5",
    description: " ",
    checklist: [],
    status: OrderStatus.InProgress
    },

    { 
      id: "657659f55366892d46b865cd",
      assetId: 9,
      assignedUserIds: [1, 2, 3],
      title: "Mesa 21",
      description: " ",
      checklist: [],
      status: OrderStatus.Completed
      }
    )
    
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
