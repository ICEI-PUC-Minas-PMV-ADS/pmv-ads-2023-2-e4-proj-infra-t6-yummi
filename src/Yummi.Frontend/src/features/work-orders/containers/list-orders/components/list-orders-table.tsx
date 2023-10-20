import { TableActions } from '@/components/data-display';
import { IWorkOrder } from '@/features/work-orders/entities';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {
  orders: IWorkOrder[];
  isLoading?: boolean;
  onDelete: (order: IWorkOrder) => void;
};

const mapStatus: Record<string, string> = {
  ['in progress']: 'warning',
  completed: 'success'
};


export const ListOrdersTable = ({
  orders,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('workOrders');
  const navigate = useNavigate();

  const columns: ColumnsType<IWorkOrder> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      responsive: ['md']
    },
    {
      title: t('Pedido'),
      dataIndex: 'title',
      key: 'title'
    },

    {
      title: t('list-orders.table.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={mapStatus[status]}>{t(`status.${status}`)}</Tag>
      )
    },
    {
      title: t('list-orders.table.actions'),
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <TableActions
          data={record}
          onDelete={onDelete}
          onEdit={() => navigate(`${record.id}/edit`)}
        />
      )
    }
  ];

  return (
    <Table
      dataSource={orders}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('list-orders.table.no-data') }}
    />
  );
};
