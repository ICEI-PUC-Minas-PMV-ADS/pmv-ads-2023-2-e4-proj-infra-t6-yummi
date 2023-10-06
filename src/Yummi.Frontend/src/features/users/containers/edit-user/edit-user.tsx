import { LoadingState } from '@/components/feedback';
import { PageHeader } from '@/components/layout';
import { useEditUser } from '@/features/users/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '../../components';

export const Component = (): JSX.Element | null => {
  const { id = '0' } = useParams();

  const { t } = useTranslation('users');
  const navigate = useNavigate();

  const { control, handleSubmit, initialValues, isSubmitting, isLoading } =
    useEditUser(Number(id));

  if (isLoading) {
    return <LoadingState />;
  }

  if (!initialValues) {
    return null;
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('form.edit-title')} backButtonLink={`/users`} />
        <UserForm
          handleSubmit={handleSubmit}
          onCancel={() => navigate('/users')}
          control={control}
          isSubmitting={isSubmitting}
        />
      </Space>
    </Card>
  );
};
