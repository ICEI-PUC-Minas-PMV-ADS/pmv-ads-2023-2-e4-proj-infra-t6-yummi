import Icon, {
  ApartmentOutlined,
  DashboardOutlined,
  FileDoneOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { HiChip, HiOfficeBuilding } from 'react-icons/hi';

export const navbarItems = [
  {
    i18nKey: 'navbar.items.dashboard',
    href: '/',
    icon: <DashboardOutlined />
  },
  {
    i18nKey: 'navbar.items.assets',
    href: '/assets',
    icon: <Icon component={HiChip} />
  },
  {
    i18nKey: 'navbar.items.companies',
    href: '/companies',
    icon: <Icon component={HiOfficeBuilding} />
  },
  {
    i18nKey: 'navbar.items.units',
    href: '/units',
    icon: <ApartmentOutlined />
  },
  {
    i18nKey: 'navbar.items.users',
    href: '/users',
    icon: <TeamOutlined />
  },
  {
    i18nKey: 'navbar.items.workorders',
    href: '/workorders',
    icon: <FileDoneOutlined />
  }
];
