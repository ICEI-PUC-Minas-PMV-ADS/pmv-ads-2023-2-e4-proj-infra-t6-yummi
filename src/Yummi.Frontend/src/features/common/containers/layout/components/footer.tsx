import { Layout } from 'antd';

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <Layout.Footer className="text-center">
      YUMMI ©{year} Created by Yummi Team
    </Layout.Footer>
  );
};
