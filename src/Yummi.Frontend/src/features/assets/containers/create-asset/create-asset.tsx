import { PageHeader } from '@/components/layout';
import { useCreateAsset } from '@/features/assets/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AssetForm } from '../../components';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateAsset();
  const navigate = useNavigate();
  const { t } = useTranslation('createAsset');

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('title')} backButtonLink="/assets" />
        <AssetForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/assets')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
