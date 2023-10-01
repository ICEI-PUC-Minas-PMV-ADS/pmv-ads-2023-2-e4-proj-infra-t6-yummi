import { PageHeader } from '@/components/layout';
import { UnitForm } from '@/features/units/components';
import { useCreateUnit } from '@/features/units/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateUnit();
  const navigate = useNavigate();
  const { t } = useTranslation('units');

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('form.create-title')} backButtonLink="/units" />
        <UnitForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/units')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
