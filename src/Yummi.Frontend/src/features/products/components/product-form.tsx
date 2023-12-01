import { CreateProductDto, createProduct } from '@/features/products/services';
import { Button, Form, Input, InputNumber, Select, Space, Upload, UploadProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const ProductForm = () => {

  const [form] = Form.useForm();
  const { t } = useTranslation('createProduct');
  const navigate = useNavigate();

  const props: UploadProps = {
    accept: 'image/*',
    maxCount: 1,
    multiple: false,
    listType: 'picture',
    beforeUpload: () => {
      return false;
    }
  };

  const onFinish = (values: CreateProductDto) => {
    createProduct(values)
      .then(() => navigate(`/products`))
      .catch(error => console.error(error));
  }

  const onCancel = () => navigate(`/products`);

  return (
    <Form
      className="w-full max-w-2xl"
      layout="vertical"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label={t('Produto')}
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Form.Item
        label={t('Descrição')}
        name="description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label={t('Preço')}
        name="price"
      >
        <InputNumber min={0} className="w-full" />
      </Form.Item>

      <Form.Item
        label={t('Imagem')}
        name="image"
      >
        <Upload {...props}> 
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Space className="w-full justify-end">
        <Button htmlType="button" onClick={onCancel}>
          {t('dictionary:cancel')}
        </Button>
        <Button type="primary" htmlType="submit">
          {t('dictionary:save')}
        </Button>
      </Space>
    </Form>
  );
};
