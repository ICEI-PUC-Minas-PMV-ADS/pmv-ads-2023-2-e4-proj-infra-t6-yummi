import { useDrawerStore } from '@/features/common/stores';
import { useIsMobile } from '@/hooks';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Typography } from 'antd';
import { LanguageSwitch } from './language-switch';

export const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  const onOpen = useDrawerStore(store => store.onOpen);

  return (
    <Layout.Header className="bg-primary-500 flex justify-center px-6">
      <div className="container inline-flex w-full justify-between">
        <Space>
          {isMobile && (
            <Button type="primary" onClick={onOpen} icon={<MenuOutlined />} />
          )}

          <Typography.Title level={4} className="!text-white">
            YUMMI
          </Typography.Title>
        </Space>
        <Space>
          <LanguageSwitch />
        </Space>
      </div>
    </Layout.Header>
  );
};
