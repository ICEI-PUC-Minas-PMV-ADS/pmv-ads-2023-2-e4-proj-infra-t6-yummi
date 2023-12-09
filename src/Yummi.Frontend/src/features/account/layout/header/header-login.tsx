import { useDrawerStore } from '@/features/common/stores';
import { useIsMobile } from '@/hooks';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Typography } from 'antd';

export const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  const onOpen = useDrawerStore(store => store.onOpen);

  return (
    <Layout.Header className="bg-black flex justify-center px-6" style={{ minHeight: '100px' }}>
      <div className="container inline-flex w-full justify-between">
        <Space>
          {isMobile && (
            <Button type="primary" onClick={onOpen} icon={<MenuOutlined />} />
          )}
          <img src="src/assets/logo.jpeg" style={{ width: '100px', height: 'auto', display: 'flex', alignItems: 'center' }}/>
          <Typography.Title level={4} className="!text-white">
            YUMMI - Administrador
          </Typography.Title>
        </Space>
        <Space>
        </Space>
      </div>
    </Layout.Header>
  );
};