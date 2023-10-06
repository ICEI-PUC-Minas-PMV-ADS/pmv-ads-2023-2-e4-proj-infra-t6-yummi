import { Button, Result } from 'antd';
import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as any;

  return (
    <div className="flex h-screen items-center justify-center">
      <Result
        status="500"
        title="Ops, please inform the following error to the administrator."
        subTitle={error.message}
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
};
