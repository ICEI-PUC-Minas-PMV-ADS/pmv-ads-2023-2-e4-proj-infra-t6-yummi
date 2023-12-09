import { Layout, Form, Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

const ResetPasswordPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);

    notification.success({
      message: 'Solicitação enviada!',
      description: 'Um link para redefinir a senha foi enviado para o seu email.',
    });
  };

  return (
    <Layout className="min-h-screen flex items-center justify-center">
      <Layout.Content className="w-full max-w-sm">
        <Form
          name="resetPasswordForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu email!' },
              { type: 'email', message: 'Por favor, insira um email válido!' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enviar
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center">
          <Link to="/login">Voltar ao Login</Link>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default ResetPasswordPage;
