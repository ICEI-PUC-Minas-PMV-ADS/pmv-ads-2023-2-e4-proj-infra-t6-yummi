import { Layout, Spin } from 'antd';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer } from '@/features/common/containers/layout/components';
import { Header } from '@/features/account/layout/header/header-login.tsx';
import { LoginForm } from '@/features/account/components/login-form.tsx';

export const LayoutPage = () => {
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <Layout className="min-h-screen">
      <Layout>
        <Header/>
        <LoginForm />
        <Spin spinning={isLoading} wrapperClassName="flex-1">
          <Layout.Content className="container mx-auto flex min-h-full pt-6">
            <Outlet />
          </Layout.Content>
        </Spin>
        <Footer />
      </Layout>
    </Layout>
  );
};