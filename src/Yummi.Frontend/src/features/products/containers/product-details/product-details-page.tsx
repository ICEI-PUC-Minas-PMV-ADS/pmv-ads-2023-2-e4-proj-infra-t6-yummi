import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useDeleteProduct } from '@/features/products/hooks';
import { useGetProduct } from '@/features/products/services';
import { Space } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFoundState } from '../../components';
import { DetailsCard, PageActions } from './components';

export const Component = (): JSX.Element => {
  const { id = '0' } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetProduct(id);
  const { deleteModal, onDelete } = useDeleteProduct({
    onSuccess: () => navigate('/products')
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
        backButtonLink="/products"
        hideDivider
      />

      <div className="flex flex-col items-start gap-4 md:flex-row">
        <DetailsCard product={data} />
      </div>
      {deleteModal}
    </Space>
  );
};
