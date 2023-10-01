import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more.js';

import { ChartStatistic } from '@/components/data-display';
import { IAsset, StatusEnum } from '@/features/assets/entities';
import { EditTwoTone } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

highchartsMore(Highcharts);

type Props = {
  assets: IAsset[];
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

const getData = (assets: IAsset[]) => {
  const inAlert = assets.filter(o => o.status === StatusEnum.InAlert);
  const inDowntime = assets.filter(o => o.status === StatusEnum.InDowntime);
  const inOperation = assets.filter(o => o.status === StatusEnum.InOperation);
  const plannedStop = assets.filter(o => o.status === StatusEnum.PlannedStop);
  const unplannedStop = assets.filter(
    o => o.status === StatusEnum.UnplannedStop
  );

  return [
    inAlert.length,
    inDowntime.length,
    inOperation.length,
    plannedStop.length,
    unplannedStop.length
  ];
};

export const AssetsStatusCard = ({ assets }: Props): JSX.Element => {
  const { t } = useTranslation('reports');

  const [inAlert, inDowntime, inOperation, plannedStop, unplannedStop] =
    getData(assets);

  const options = useMemo(
    () => ({
      ...baseOptions,
      series: [
        {
          name: 'Assets',
          colorByPoint: true,
          data: [
            {
              name: t(`common:asset-status.${StatusEnum.InAlert}`),
              y: inAlert,
              color: '#ff4d4f'
            },
            {
              name: t(`common:asset-status.${StatusEnum.InDowntime}`),
              y: inDowntime,
              color: '#faad14'
            },
            {
              name: t(`common:asset-status.${StatusEnum.InOperation}`),
              y: inOperation,
              color: '#52c41a'
            },
            {
              name: t(`common:asset-status.${StatusEnum.PlannedStop}`),
              y: plannedStop,
              color: '#1890ff'
            },
            {
              name: t(`common:asset-status.${StatusEnum.UnplannedStop}`),
              y: unplannedStop,
              color: '#722ed1'
            }
          ]
        }
      ]
    }),
    [inAlert, inDowntime, inOperation, plannedStop, unplannedStop, t]
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
            value={inAlert}
            label={t(`common:asset-status.${StatusEnum.InAlert}`)}
            color="red"
          />
          <ChartStatistic
            value={inDowntime}
            label={t(`common:asset-status.${StatusEnum.InDowntime}`)}
            color="yellow"
          />
          <ChartStatistic
            value={inOperation}
            label={t(`common:asset-status.${StatusEnum.InOperation}`)}
            color="blue"
          />
          <ChartStatistic
            value={plannedStop}
            label={t(`common:asset-status.${StatusEnum.PlannedStop}`)}
            color="green"
          />
          <ChartStatistic
            value={unplannedStop}
            label={t(`common:asset-status.${StatusEnum.UnplannedStop}`)}
            color="green"
          />
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Space>
    </Card>
  );
};
