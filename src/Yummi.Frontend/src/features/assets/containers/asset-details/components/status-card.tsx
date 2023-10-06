import { GaugeChart } from '@/components/data-display';
import { IAsset } from '@/features/assets/entities';
import { mapStatusToColor } from '@/features/assets/utils';
import { formatDate } from '@/utils';
import { Card, Col, Row, Statistic, Tag } from 'antd';
import { useTranslation } from 'react-i18next';

type Props = {
  asset: IAsset;
};

export const StatusCard = ({ asset }: Props): JSX.Element => {
  const { status, healthscore, metrics } = asset;
  const { lastUptimeAt, totalCollectsUptime, totalUptime } = metrics;
  const { t } = useTranslation('assetDetails');

  return (
    <Card title={t('status-card.title')} className="flex-1">
      <Row gutter={16} className="w-full">
        <Col span={12} lg={8}>
          <Statistic
            title={t('status-card.totalCollectsUptime')}
            value={totalCollectsUptime}
            decimalSeparator=","
            groupSeparator="."
          />
        </Col>
        <Col span={12} lg={8}>
          <Statistic
            title={t('status-card.totalUptime')}
            value={totalUptime}
            precision={2}
            decimalSeparator=","
            groupSeparator="."
          />
        </Col>
        <Col span={24} lg={8} className="mt-10 lg:mt-0">
          <Statistic
            title={t('status-card.lastUptimeAt')}
            value={lastUptimeAt}
            formatter={value => (value ? formatDate(`${value}`) : '-')}
            valueRender={value => (
              <span className="whitespace-nowrap lg:max-xl:text-lg">
                {value}
              </span>
            )}
          />
        </Col>
      </Row>
      <Row className="mt-10 w-full">
        <Col span={12} lg={8}>
          <Statistic
            title={t('status-card.status')}
            valueRender={() => (
              <Tag className="text-3xl" color={mapStatusToColor(status)}>
                {t(`common:asset-status.${status}`)}
              </Tag>
            )}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={t('status-card.healthscore')}
            valueRender={() => <GaugeChart value={healthscore} />}
          />
        </Col>
      </Row>
    </Card>
  );
};
