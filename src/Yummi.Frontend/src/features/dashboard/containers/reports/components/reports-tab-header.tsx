import { PieChartTwoTone } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

type Props = {
  activeKey: string;
  onTabClick: (key: string, e: React.MouseEvent<HTMLElement>) => void;
  tabList: Array<{
    key: string;
    label: string;
    icon: JSX.Element;
  }>;
};

export const ReportsTabHeader = ({
  activeKey,
  onTabClick,
  tabList
}: Props): JSX.Element => {
  const { t } = useTranslation('reports');

  return (
    <Space direction="vertical" size={0}>
      <Space className="items-center" size={24}>
        <Space className="w-full items-center">
          <PieChartTwoTone style={{ fontSize: 20 }} />
          <Typography.Title level={3}>{t('reports')}</Typography.Title>
        </Space>
        <Space className="items-center">
          {tabList.map(tab => (
            <Button
              key={`report-tab-item-${tab.key}`}
              icon={tab.icon}
              type={activeKey === tab.key ? 'primary' : 'default'}
              onClick={e => onTabClick(tab.key, e)}
            >
              {tab.label}
            </Button>
          ))}
        </Space>
      </Space>
      <Divider className="mt-4" />
    </Space>
  );
};
