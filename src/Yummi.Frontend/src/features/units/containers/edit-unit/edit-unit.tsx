import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditUnit } from '@/features/units/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { UnitForm } from '../../components';

export const Component = (): JSX.Element | null => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('units');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditUnit(Number(id));

  if (isLoading) {
    return <LoadingState />;
  }

  if (!initialValues) {
    return null;
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('form.edit-title')} backButtonLink={`/units`} />
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
