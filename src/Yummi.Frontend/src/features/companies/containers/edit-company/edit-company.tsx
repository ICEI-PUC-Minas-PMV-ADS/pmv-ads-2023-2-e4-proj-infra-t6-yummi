import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditCompany } from '@/features/companies/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { CompanyForm } from '../../components';

export const Component = (): JSX.Element | null => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('companies');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditCompany(Number(id));

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
          title={t('company-form.edit-title')}
          backButtonLink={`/companies`}
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
