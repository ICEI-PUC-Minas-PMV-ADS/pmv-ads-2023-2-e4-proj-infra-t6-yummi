import { IAsset } from '@/features/assets/entities';
import { Card, Image, Skeleton, Space, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

type Props = {
  asset: IAsset;
};

export const DetailsCard = ({ asset }: Props): JSX.Element => {
  const { image, model, sensors, specifications } = asset;
  const { t } = useTranslation('assetDetails', { keyPrefix: 'details-card' });

  return (
    <Card title={t('title')} className="w-full md:w-max">
      <Space direction="vertical" className="w-full">
        <div className="h-full max-h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg">
          <Image
            src={image}
            placeholder={
              <Skeleton.Image
                active
                className="!h-full max-h-[300px] !w-full"
                rootClassName="w-full"
              />
            }
          />
        </div>
        <Space direction="vertical">
          <Typography.Text>
            <strong>{t('model')}:</strong> {model}
          </Typography.Text>
          <Space>
            <Typography.Text strong>{t('sensors')}:</Typography.Text>
            {sensors.map(sensor => (
              <Tag key={sensor}>{sensor}</Tag>
            ))}
          </Space>
          <Typography.Text>
            <strong>{t('maxTemp')}:</strong> {specifications.maxTemp || '-'}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('power')}:</strong> {specifications.power || '-'}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('rpm')}:</strong> {specifications.rpm || '-'}
          </Typography.Text>
        </Space>
      </Space>
    </Card>
  );
};
