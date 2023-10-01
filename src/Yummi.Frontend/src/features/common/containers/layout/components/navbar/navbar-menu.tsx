import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { navbarItems } from './constants';

type Props = {
  mode: 'horizontal' | 'vertical';
  className?: string;
};

export const NavbarMenu = ({ mode, className }: Props): JSX.Element => {
  const { t } = useTranslation('layout');
  const { pathname } = useLocation();

  return (
    <Menu
      mode={mode}
      className={className}
      selectedKeys={[pathname]}
      items={navbarItems.map(({ i18nKey, icon, href }) => ({
        icon,
        key: href,
        label: <Link to={href}>{t(i18nKey)}</Link>
      }))}
    />
  );
};
