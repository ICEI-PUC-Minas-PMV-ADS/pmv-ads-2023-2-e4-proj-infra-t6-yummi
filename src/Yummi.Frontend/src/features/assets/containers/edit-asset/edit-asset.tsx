import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditAsset } from '@/features/assets/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { AssetForm, NotFoundState } from '../../components';

export const Component = (): JSX.Element => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('createAsset');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditAsset(Number(id));

  if (isLoading) {
    return <LoadingState />;
  }

  if (!initialValues) {
    return <NotFoundState />;
  }

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Editar Produto')} backButtonLink={`/assets/${id}`} />
        <AssetForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/assets')}
          control={control}
          isSubmitting={isSubmitting}
          initialValues={initialValues}
        />
      </Space>
    </Card>
  );
};
