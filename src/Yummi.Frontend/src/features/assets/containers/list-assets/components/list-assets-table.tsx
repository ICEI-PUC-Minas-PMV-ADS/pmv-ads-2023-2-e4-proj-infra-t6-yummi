import { TableActions } from '@/components/data-display';
import { IAsset } from '@/features/assets/entities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  assets: IAsset[];
  isLoading?: boolean;
  onDelete: (asset: IAsset) => void;
};

export const ListAssetsTable = ({
  assets,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('listAssets');
  const navigate = useNavigate();

  const columns: ColumnsType<IAsset> = [
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
      title: t('table.actions'),
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
      dataSource={assets}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('table.no-data') }}
    />
  );
};
