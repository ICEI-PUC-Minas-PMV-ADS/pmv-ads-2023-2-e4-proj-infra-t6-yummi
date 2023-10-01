import { theme } from 'antd';

export const useTokens = () => {
  const { token } = theme.useToken();

  return token;
};
