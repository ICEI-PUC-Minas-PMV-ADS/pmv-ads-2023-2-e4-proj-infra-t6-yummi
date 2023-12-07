import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { Space } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFoundState } from '../../components';
import { DetailsCard, PageActions } from './components';
import { useGetUser } from '../../services';
import { useDeleteUser } from '../../hooks';

export const Component = (): JSX.Element => {
  const { id = '0' } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetUser(id);
  const { deleteModal, onDelete } = useDeleteUser({
    onSuccess: () => navigate('/users')
  });

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data) {
    return <NotFoundState />;
  }

  return (
    <Space direction="vertical" className="w-full" size={24}>
      <PageHeader
        title={data.name}
        actions={<PageActions onDelete={() => onDelete(data)} />}
        backButtonLink="/users"
        hideDivider
      />

      <div className="flex flex-col items-start gap-4 md:flex-row">
        <DetailsCard user={data} />
      </div>
      {deleteModal}
    </Space>
  );
};
