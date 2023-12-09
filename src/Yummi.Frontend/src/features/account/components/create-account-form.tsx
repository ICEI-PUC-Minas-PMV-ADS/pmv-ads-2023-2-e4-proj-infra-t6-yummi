import { CreateUserDto, createUser } from '@/features/users/services';
import { Button, Form, Input, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const UserForm = () => {

  const [form] = Form.useForm();
  const { t } = useTranslation('createUser');
  const navigate = useNavigate();

  const onFinish = async (values: CreateUserDto) => {
    await createUser(values)
      .then(() => navigate(`/users`))
      .catch(error => {
        console.error(error);
      });
  }

  const options = [
    { value: 0, label: 'Administrador' },
    { value: 1, label: 'Cliente' }
  ];

  const onCancel = () => navigate(`/users`);

  return (
    <Form
      className="w-full max-w-2xl"
      layout="vertical"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label={t('Usuario')}
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('Login')}
        name="login"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('Senha')}
        name="password"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={t('Perfil')}
        name="perfil"
      >
        <Select
          options={options}
        />
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
