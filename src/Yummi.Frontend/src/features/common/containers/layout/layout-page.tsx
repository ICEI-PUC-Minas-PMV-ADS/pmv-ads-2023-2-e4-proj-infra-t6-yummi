import { Layout, Spin } from 'antd';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header, Navbar } from './components';

export const LayoutPage = () => {
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <Layout className="min-h-screen">
      <Layout>
        <Header />
        <Navbar />
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
