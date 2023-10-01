import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more.js';

import { ChartStatistic } from '@/components/data-display';
import { IWorkOrder, OrderStatus } from '@/features/work-orders/entities';
import { EditTwoTone } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';

highchartsMore(Highcharts);

type Props = {
  orders: IWorkOrder[];
};

const options: Highcharts.Options = {
  title: { text: '' },
  subtitle: { text: '' },
  yAxis: { enabled: false, title: { text: '' } },
  xAxis: { visible: false },
  legend: { enabled: false },

  // the data is mocked, because the data on the fake api is not enough to
  series: [
    {
      type: 'spline',
      name: 'Criadas',
      color: '#1890ff',
      lineWidth: 4,
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610
      ]
    },
    {
      type: 'spline',
      name: 'Concluídas',
      color: '#52c41a',
      lineWidth: 4,
      data: [
        24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
        31050
      ]
    }
  ]
};

const getData = (orders: IWorkOrder[]) => {
  const created = orders.length;
  const finished = orders.filter(
    order => order.status === OrderStatus.Completed
  ).length;
  const percentage = (finished / created) * 100;

  return [created, finished, percentage];
};

export const FinishedOrdersCard = ({ orders }: Props): JSX.Element => {
  const { t } = useTranslation('reports');

  const [created, finished, percentage] = getData(orders);

  return (
    <Card
      className="flex-1"
      title={
        <Space>
          <EditTwoTone />
          <span>{t('create-vs-completed')}</span>
        </Space>
      }
    >
      <Space direction="vertical" className="w-full items-center" size={24}>
        <div className="flex flex-wrap gap-6">
          <ChartStatistic value={created} label="Criadas" color="blue" />
          <ChartStatistic value={finished} label="Concluídas" color="green" />
          <ChartStatistic
            value={percentage}
            label="Índice de OS's concluídas"
            type="percentage"
          />
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Space>
    </Card>
  );
};
