import { PageHeader } from '@/components/layout';
import { UserForm } from '@/features/users/components';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';

export const Component = (): JSX.Element => {
  const { t } = useTranslation('createUser');

  return (
    <Card className="mx-auto">
      <Space className="w-full" direction="vertical" size={24}>
        <PageHeader title={t('Cadastrar Usuário')} backButtonLink="/users" />
        <UserForm/>
      </Space>
    </Card>
  );
};
