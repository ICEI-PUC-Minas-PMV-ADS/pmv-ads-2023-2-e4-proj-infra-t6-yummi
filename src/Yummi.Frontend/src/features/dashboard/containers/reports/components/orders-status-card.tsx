import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more.js';

import { ChartStatistic } from '@/components/data-display';
import { IWorkOrder, OrderStatus } from '@/features/work-orders/entities';
import { EditTwoTone } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

highchartsMore(Highcharts);

type Props = {
  orders: IWorkOrder[];
};

const baseOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: { text: '' },
  subtitle: { text: '' },
  yAxis: { enabled: false, title: { text: '' } },
  xAxis: { visible: false },
  legend: { enabled: false }
};

const getData = (orders: IWorkOrder[]) => {
  const completed = orders.filter(o => o.status === OrderStatus.Completed);
  const inProgress = orders.filter(o => o.status === OrderStatus.InProgress);
  const onHold = orders.filter(o => o.status === OrderStatus.OnHold);
  const opened = orders.filter(o => o.status === OrderStatus.Opened);

  return [completed.length, inProgress.length, onHold.length, opened.length];
};

export const OrdersStatusCard = ({ orders }: Props): JSX.Element => {
  const { t } = useTranslation('workOrders');

  const [completed, inProgress, onHold, opened] = getData(orders);

  const options = useMemo(
    () => ({
      ...baseOptions,
      series: [
        {
          name: 'Orders',
          colorByPoint: true,
          data: [
            {
              name: t(`status.${OrderStatus.Opened}`),
              y: opened,
              color: '#ff4d4f'
            },
            {
              name: t(`status.${OrderStatus.OnHold}`),
              y: onHold,
              color: '#faad14'
            },
            {
              name: t(`status.${OrderStatus.InProgress}`),
              y: inProgress,
              color: '#1890ff'
            },
            {
              name: t(`status.${OrderStatus.Completed}`),
              y: completed,
              color: '#52c41a'
            }
          ]
        }
      ]
    }),
    [completed, inProgress, onHold, opened, t]
  );

  return (
    <Card
      className="flex-1"
      title={
        <Space>
          <EditTwoTone />
          <span>Status</span>
        </Space>
      }
    >
      <Space direction="vertical" className="w-full items-center" size={24}>
        <div className="flex flex-wrap gap-6">
          <ChartStatistic
            value={opened}
            label={t(`status.${OrderStatus.Opened}`)}
            color="red"
          />
          <ChartStatistic
            value={onHold}
            label={t(`status.${OrderStatus.OnHold}`)}
            color="yellow"
          />
          <ChartStatistic
            value={inProgress}
            label={t(`status.${OrderStatus.InProgress}`)}
            color="blue"
          />
          <ChartStatistic
            value={completed}
            label={t(`status.${OrderStatus.Completed}`)}
            color="green"
          />
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Space>
    </Card>
  );
};
