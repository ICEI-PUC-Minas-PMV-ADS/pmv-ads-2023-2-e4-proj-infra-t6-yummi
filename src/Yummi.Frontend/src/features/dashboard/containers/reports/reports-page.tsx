import { useListAssets } from '@/features/assets/services';
import { useListWorkOrders } from '@/features/work-orders/services';
import Icon, { FileDoneOutlined } from '@ant-design/icons';
import { Card, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { HiChip } from 'react-icons/hi';
import {
  AssetsStatusCard,
  FinishedOrdersCard,
  OrdersStatusCard,
  ReportsTabHeader
} from './components';

export const Component = (): JSX.Element => {
  const { t } = useTranslation('reports');
  const { data: orders = [] } = useListWorkOrders();
  const { data: assets = [] } = useListAssets();

  const tabList = [
    {
      key: 'orders',
      label: t('work-orders'),
      icon: <FileDoneOutlined />,
      children: (
        <div className="flex w-full flex-col gap-8 xl:flex-row">
          <FinishedOrdersCard orders={orders} />
          <OrdersStatusCard orders={orders} />
        </div>
      )
    },
    {
      key: 'assets',
      label: t('assets'),
      icon: <Icon component={HiChip} />,
      children: <AssetsStatusCard assets={assets} />
    }
  ];

  return (
    <Card className="w-full">
      <Tabs
        defaultActiveKey="orders"
        items={tabList}
        renderTabBar={({ activeKey, onTabClick }) => (
          <ReportsTabHeader
            activeKey={activeKey}
            onTabClick={onTabClick}
            tabList={tabList}
          />
        )}
      />
    </Card>
  );
};
