import { PageHeader } from '@/components/layout';
import { WorkOrderForm } from '@/features/work-orders/components';
import { useCreateWorkOrder } from '@/features/work-orders/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateWorkOrder();
  const navigate = useNavigate();
  const { t } = useTranslation('workOrders');

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader
          title={t('form.create-title')}
          backButtonLink="/workorders"
        />
        <WorkOrderForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/workorders')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
