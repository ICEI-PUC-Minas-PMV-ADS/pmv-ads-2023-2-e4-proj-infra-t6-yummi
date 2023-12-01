import { TableActions } from '@/components/data-display';
import { IProduct } from '@/features/products/entities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  products: IProduct[];
  isLoading?: boolean;
  onDelete: (Product: IProduct) => void;
};

export const ListProductsTable = ({
  products,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('listProducts');
  const navigate = useNavigate();

  const columns: ColumnsType<IProduct> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      responsive: ['sm']
    },
    {
      title: t('Produto'),
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => <Link to={`${record.id}`}>{name}</Link>
    },
    {
      title: t('Categoria'),
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: t('Ações'),
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <TableActions
          data={record}
          onDelete={onDelete}
          onEdit={() => navigate(`${record.id}/edit`)}
          viewHref={`${record.id}`}
        />
      )
    }
  ];

  return (
    <Table
      dataSource={products}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('Nenhum produto encontrado') }}
    />
  );
};
