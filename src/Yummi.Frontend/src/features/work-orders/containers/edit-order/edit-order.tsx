import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditWorkOrder } from '@/features/work-orders/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { WorkOrderForm } from '../../components';

export const Component = (): JSX.Element | null => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('workOrders');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditWorkOrder(Number(id));

  if (isLoading) {
    return <LoadingState />;
  }

  if (!initialValues) {
    return null;
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader
          title={t('form.edit-title')}
          backButtonLink={`/workorders`}
        />
        <WorkOrderForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/workorders')}
          control={control}
          isSubmitting={isSubmitting}
          initialValues={initialValues}
        />
      </Space>
    </Card>
  );
};
