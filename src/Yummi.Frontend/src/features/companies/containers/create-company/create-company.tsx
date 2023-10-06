import { PageHeader } from '@/components/layout';
import { CompanyForm } from '@/features/companies/components';
import { useCreateCompany } from '@/features/companies/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateCompany();
  const navigate = useNavigate();
  const { t } = useTranslation('companies');

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader
          title={t('company-form.create-title')}
          backButtonLink="/companies"
        />
        <CompanyForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/companies')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
