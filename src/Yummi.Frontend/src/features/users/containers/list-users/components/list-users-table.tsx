import { TableActions } from '@/components/data-display';
import { IUser } from '@/features/users/entities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {
  users: IUser[];
  isLoading?: boolean;
  onDelete: (user: IUser) => void;
};

export const ListUsersTable = ({
  users,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('users', { keyPrefix: 'list-users' });
  const navigate = useNavigate();

  const columns: ColumnsType<IUser> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      responsive: ['md']
    },
    {
      title: t('table.name'),
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: t('table.email'),
      dataIndex: 'email',
      key: 'email'
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
        />
      )
    }
  ];

  return (
    <Table
      dataSource={users}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('table.no-data') }}
    />
  );
};
