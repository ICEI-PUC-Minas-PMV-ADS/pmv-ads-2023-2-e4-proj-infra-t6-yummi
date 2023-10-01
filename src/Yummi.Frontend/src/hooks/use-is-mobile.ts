import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useIsMobile = () => {
  const screens = useBreakpoint();

  return !screens.md;
};
