import { useDrawerStore } from '@/features/common/stores';
import { useIsMobile } from '@/hooks';
import { Drawer } from 'antd';
import { NavbarMenu } from './navbar-menu';

export const Navbar = (): JSX.Element => {
  const isMobile = useIsMobile();
  const { isOpen, onClose } = useDrawerStore();

  if (isMobile) {
    return (
      <Drawer
        title="TRACTIAN"
        placement="left"
        bodyStyle={{ padding: 16 }}
        open={isOpen}
        onClose={onClose}
      >
        <NavbarMenu mode="vertical" />
      </Drawer>
    );
  }

  return (
    <NavbarMenu className="h-[50px] justify-center gap-4" mode="horizontal" />
  );
};
