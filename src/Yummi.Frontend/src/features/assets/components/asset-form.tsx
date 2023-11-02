import { FormItem } from '@/components/form';
import { CreateAssetDto } from '@/features/assets/services';
import { Button, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { UploadOutlined } from '@ant-design/icons';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateAssetDto, any>;
  isSubmitting?: boolean;
  initialValues?: Partial<CreateAssetDto>;
};

export const AssetForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting,
  initialValues
}: Props) => {
  const { t } = useTranslation('createAsset');

  return (
    <Form
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateAssetDto>
        control={control}
        label={t('Produto')}
        name="name"
        required
      >
        <Input />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('Categoria')}
        name="category"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
        >
          {[
            'Entradas',
            'Pratos Principais',
            'Drinks e Bebidas',
            'Sobremesas'
          ].map(category => (
            <Select.Option key={category} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('Descrição')}
        name="description"
        required
      >
        <Input.TextArea />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('Preço')}
        name="price"
        required
      >
        <InputNumber min={0} className="w-full" />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('Imagem')}
        name="image"
        required
      >
        <Upload>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </FormItem>

      <Space className="w-full justify-end">
        <Button htmlType="button" onClick={onCancel}>
          {t('dictionary:cancel')}
        </Button>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          {t('dictionary:save')}
        </Button>
      </Space>
    </Form>
  );
};