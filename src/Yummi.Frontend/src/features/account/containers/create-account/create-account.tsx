import { PageHeader } from '@/components/layout';
import { LoginForm } from '@/features/account/components/login-form.tsx';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation('create account');

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Crie sua conta')} />
        <LoginForm />
      </Space>
    </Card>
  );
};