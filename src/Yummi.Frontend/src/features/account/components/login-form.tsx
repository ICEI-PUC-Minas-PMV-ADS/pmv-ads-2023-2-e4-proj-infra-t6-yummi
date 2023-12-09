import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '@/features/users/services/get-user.ts';

export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await getUser(values.name);

      if (user && user.password === values.password) {
        navigate('/layout-page');
      } else {
        console.log('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro durante a autenticação:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Yummi</h1>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="Usuário"
            name="name"
            rules={[{ required: true, message: 'Por favor, insira seu login' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="px-8 pb-8">
        <Link to="@/features/account/components/create-account-form.tsx" className="block mb-2">Crie sua conta</Link>
        <Link to="./forget-password" className="block">Esqueceu sua senha?</Link>
      </div>
    </div>
  );
};