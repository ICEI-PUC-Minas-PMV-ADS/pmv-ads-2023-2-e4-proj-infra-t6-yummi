//import {
//  TeamOutlined,
//} from '@ant-design/icons';
import { MdRestaurantMenu, MdDescription } from 'react-icons/md'; 

export const navbarItems = [
  {
    i18nKey: 'Produtos',
    href: '/products',
    icon: <MdRestaurantMenu /> 
  },
/*  {
    i18nKey: 'navbar.items.users',
    href: '/users',
    icon: <TeamOutlined /> 
  },*/
  {
    i18nKey: 'navbar.items.workorders',
    href: '/workorders',
    icon: <MdDescription /> 
  }
];
