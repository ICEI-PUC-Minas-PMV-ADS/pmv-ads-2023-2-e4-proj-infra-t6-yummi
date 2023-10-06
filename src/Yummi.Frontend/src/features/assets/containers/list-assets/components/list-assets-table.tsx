import { TableActions } from '@/components/data-display';
import { IAsset } from '@/features/assets/entities';
import { mapStatusToColor } from '@/features/assets/utils';
import { Progress, Table, Tag } from 'antd';
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
      title: t('table.name'),
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => <Link to={`${record.id}`}>{name}</Link>
    },
    {
      title: t('table.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={mapStatusToColor(status)}>
          {t(`common:asset-status.${status}`)}
        </Tag>
      ),
      responsive: ['sm']
    },
    {
      title: t('table.healthscore'),
      dataIndex: 'healthscore',
      key: 'healthscore',
      render: value => <Progress percent={value} size="small" steps={20} />,
      responsive: ['md']
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
