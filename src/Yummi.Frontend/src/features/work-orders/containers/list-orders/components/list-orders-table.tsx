import { TableActions } from '@/components/data-display';
import { IWorkOrder } from '@/features/work-orders/entities';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusOutlined
} from '@ant-design/icons';
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

const mapPriority: Record<string, JSX.Element> = {
  high: <ArrowUpOutlined color="#ec3237" />,
  medium: <MinusOutlined color="#f5a623" />,
  low: <ArrowDownOutlined color="#1bd171" />
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
      title: t('list-orders.table.title'),
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: t('list-orders.table.priority'),
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <div className="inline-flex items-center gap-2">
          {mapPriority[priority]}
          <span>{t(`priority.${priority}`)}</span>
        </div>
      )
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
