import { PageHeader } from '@/components/layout';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDeleteUnit } from '../../hooks';
import { useListUnits } from '../../services';
import { ListUnitsTable } from './components';

export const Component = () => {
  const { t } = useTranslation('units', { keyPrefix: 'list-units' });
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListUnits(search);
  const { deleteModal, onDelete } = useDeleteUnit();

  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full" size={24}>
        <PageHeader
          title={t('title')}
          actions={
            <Link to="create">
              <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
                {t('add-unit')}
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

        <ListUnitsTable
          units={data}
          isLoading={isLoading}
          onDelete={onDelete}
        />

        {deleteModal}
      </Space>
    </Card>
  );
};
