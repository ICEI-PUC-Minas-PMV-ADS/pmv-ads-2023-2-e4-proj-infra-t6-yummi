import { Card, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { IUser } from '@/features/users/entities';

type Props = {
  user: IUser;
};

export const DetailsCard = ({ user }: Props): JSX.Element => {
  const { name, login, password, perfil } = user;
  const { t } = useTranslation('userDetails', { keyPrefix: '' });

  const cardStyle = {
    width: '900px',
    margin: '0 auto',
  };

  return (
    <Card title={t('Detalhes do Usuário')} style={cardStyle} className="w-full md:w-max">

        <Space direction="vertical">
          <Typography.Text>
            <strong>{t('Nome')}:</strong> {name}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Login')}:</strong> {login}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Senha')}:</strong> {password}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Perfil')}:</strong> {perfil}
          </Typography.Text>
        </Space>
    </Card>
  );
};
