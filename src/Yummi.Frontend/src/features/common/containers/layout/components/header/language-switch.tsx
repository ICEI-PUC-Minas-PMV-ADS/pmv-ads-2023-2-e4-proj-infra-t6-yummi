import { useIsMobile } from '@/hooks';
import { Menu, Dropdown, Button } from 'antd';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LanguageSwitch = (): JSX.Element => {
  const isMobile = useIsMobile();

  const menuToShow = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/users">Meu Perfil</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuToShow} trigger={['click']} arrow>
      <Button
        aria-label={isMobile ? 'Meu Perfil' : 'change-language'}
        size="large"
        type="primary"
        icon={<FaUser />}
      />
    </Dropdown>
  );
};
