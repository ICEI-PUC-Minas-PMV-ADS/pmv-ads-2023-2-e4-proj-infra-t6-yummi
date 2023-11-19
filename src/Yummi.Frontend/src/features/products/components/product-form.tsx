import { FormItem } from '@/components/form';
import { CreateProductDto } from '@/features/products/services';
import { Button, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { UploadOutlined } from '@ant-design/icons';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateProductDto, any>;
  isSubmitting?: boolean;
  initialValues?: Partial<CreateProductDto>;
};

export const ProductForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting,
  initialValues
}: Props) => {
  const { t } = useTranslation('createProduct');

  return (
    <Form
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateProductDto>
        control={control}
        label={t('Produto')}
        name="name"
      >
        <Input />
      </FormItem>

      <FormItem<CreateProductDto>
        control={control}
        label={t('Categoria')}
        name="category"
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

      <FormItem<CreateProductDto>
        control={control}
        label={t('Descrição')}
        name="description"
      >
        <Input.TextArea />
      </FormItem>

      <FormItem<CreateProductDto>
        control={control}
        label={t('Preço')}
        name="price"
      >
        <InputNumber min={0} className="w-full" />
      </FormItem>

      <FormItem<CreateProductDto>
        control={control}
        label={t('Imagem')}
        name="image"
      >
        <Upload accept="image/*"> 
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
