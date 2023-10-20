import { Card, Image, Skeleton, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { IAsset, StatusEnum } from '@/features/assets/entities';

type Props = {
  asset: IAsset;
};

export const DetailsCard = ({ asset }: Props): JSX.Element => {
  const { image, category, name, description, price } = asset;
  const { t } = useTranslation('assetDetails', { keyPrefix: '' });

  const cardStyle = {
    width: '900px',
    margin: '0 auto',
  };

  return (
    <Card title={t('Detalhes do Produto')} style={cardStyle} className="w-full md:w-max">
      <Space direction="vertical" className="w-full">
        <div className="h-full max-h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg">
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
            <strong>{t('Categoria')}:</strong> {category}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Produto')}:</strong> {name}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Descrição')}:</strong> {description}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Preço')}:</strong> {price}
          </Typography.Text>
          <Typography.Text>
            <strong>{t('Status')}:</strong> {StatusEnum[asset.status]}
          </Typography.Text>
        </Space>
      </Space>
    </Card>
  );
};
