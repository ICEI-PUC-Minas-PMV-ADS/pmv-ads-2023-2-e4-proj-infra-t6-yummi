import { Card, Image, Skeleton, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { IProduct, StatusEnum } from '@/features/products/entities';
import { getEnv } from '@/utils';

type Props = {
  product: IProduct;
};

export const DetailsCard = ({ product }: Props): JSX.Element => {
  const { imagePath, category, name, description, price } = product;
  const { t } = useTranslation('productDetails', { keyPrefix: '' });

  const cardStyle = {
    width: '900px',
    margin: '0 auto',
  };

  return (
    <Card title={t('Detalhes do Produto')} style={cardStyle} className="w-full md:w-max">
      <Space direction="vertical" className="w-full">
        <div className="h-full max-h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg">
          <Image
            src={ getEnv('API_URL') + imagePath.replace('~', '')} 
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
            <strong>{t('Status')}:</strong> {StatusEnum[product.status]}
          </Typography.Text>
        </Space>
      </Space>
    </Card>
  );
};
