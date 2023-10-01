import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Component = (): JSX.Element => {
  const { t } = useTranslation('notFound');

  return (
    <Result
      status="404"
      className="w-full"
      title={t('title')}
      subTitle={t('body')}
      extra={
        <Link to="/">
          <Button type="primary">{t('action')}</Button>
        </Link>
      }
    />
  );
};
