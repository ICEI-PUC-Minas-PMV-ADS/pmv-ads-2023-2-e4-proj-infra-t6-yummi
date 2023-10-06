import { PageHeader } from '@/components/layout';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDeleteUser } from '../../hooks';
import { useListUsers } from '../../services';
import { ListUsersTable } from './components';

export const Component = () => {
  const { t } = useTranslation('users', { keyPrefix: 'list-users' });
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListUsers(search);
  const { deleteModal, onDelete } = useDeleteUser();

  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full" size={24}>
        <PageHeader
          title={t('title')}
          actions={
            <Link to="create">
              <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
                {t('add-user')}
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

        <ListUsersTable
          users={data}
          isLoading={isLoading}
          onDelete={onDelete}
        />

        {deleteModal}
      </Space>
    </Card>
  );
};
