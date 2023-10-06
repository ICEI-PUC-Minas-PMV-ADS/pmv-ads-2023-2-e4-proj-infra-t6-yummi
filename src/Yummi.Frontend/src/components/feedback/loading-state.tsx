import { Card, Skeleton, Space } from 'antd';

export const LoadingState = (): JSX.Element => {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <Space direction="vertical" className="w-full">
        <Skeleton active />
        <Skeleton.Node active fullSize className="!w-full" />
      </Space>
    </Card>
  );
};
