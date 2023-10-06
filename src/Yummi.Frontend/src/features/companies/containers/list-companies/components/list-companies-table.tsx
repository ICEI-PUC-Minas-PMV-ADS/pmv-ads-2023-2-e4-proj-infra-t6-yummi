import { TableActions } from '@/components/data-display';
import { ICompany } from '@/features/companies/entities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {
  companies: ICompany[];
  isLoading?: boolean;
  onDelete: (company: ICompany) => void;
};

export const ListCompaniesTable = ({
  companies,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('companies');
  const navigate = useNavigate();

  const columns: ColumnsType<ICompany> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      responsive: ['md']
    },
    {
      title: t('list-companies.table.name'),
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: t('list-companies.table.actions'),
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
      dataSource={companies}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('list-companies.table.no-data') }}
    />
  );
};
