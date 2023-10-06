import { PageHeader } from '@/components/layout';
import { UserForm } from '@/features/users/components';
import { useCreateUser } from '@/features/users/hooks';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Component = (): JSX.Element => {
  const { control, handleSubmit, isSubmitting } = useCreateUser();
  const navigate = useNavigate();
  const { t } = useTranslation('users');

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('form.create-title')} backButtonLink="/users" />
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
