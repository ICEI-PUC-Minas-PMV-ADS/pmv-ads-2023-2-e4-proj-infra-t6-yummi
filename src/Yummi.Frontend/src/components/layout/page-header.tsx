import { LeftOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  actions?: JSX.Element;
  backButtonLink?: string;
  hideDivider?: boolean;
};

export const PageHeader = ({
  title,
  actions,
  backButtonLink,
  hideDivider
}: Props): JSX.Element => {
  return (
    <Space direction="vertical" className="w-full">
      <div className="flex w-full flex-row justify-between md:flex-row">
        <Space size="middle">
          {backButtonLink && (
            <Link to={backButtonLink}>
              <Button size="large" icon={<LeftOutlined />} />
            </Link>
          )}
          <Typography.Title level={2} className="text-xl">
            {title}
          </Typography.Title>
        </Space>
        {actions}
      </div>
      {!hideDivider && <Divider className="my-0" />}
    </Space>
  );
};
