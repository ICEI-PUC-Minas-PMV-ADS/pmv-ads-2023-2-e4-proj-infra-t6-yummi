import { Space, Typography } from 'antd';
import { useRef } from 'react';

type Props = {
  value: number;
  label: string;
  type?: 'summary' | 'percentage';
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
};

export const ChartStatistic = ({
  label,
  type = 'summary',
  value,
  color
}: Props): JSX.Element => {
  const isPercentage = type === 'percentage';
  const valueRef = useRef<HTMLSpanElement>(null);

  return (
    <Space direction="vertical" className="items-center" size={16}>
      <Typography.Text strong className="text-4xl" ref={valueRef}>
        {isPercentage ? `${value.toFixed(2)}%` : value}
      </Typography.Text>
      {isPercentage && (
        <Typography.Text
          className="text-md text-gray-600"
          style={{ width: valueRef.current?.clientWidth }}
        >
          {label}
        </Typography.Text>
      )}
      {!isPercentage && (
        <div
          data-color={color}
          className="group rounded-md border border-solid border-gray-900 px-6 py-2 data-[color=blue]:border-blue-500 data-[color=green]:border-green-500 data-[color=purple]:border-purple-500 data-[color=red]:border-red-500 data-[color=yellow]:border-yellow-500"
        >
          <span className="text-lg group-data-[color=blue]:text-blue-500 group-data-[color=green]:text-green-500 group-data-[color=purple]:text-purple-500 group-data-[color=red]:text-red-500 group-data-[color=yellow]:text-yellow-500">
            {label}
          </span>
        </div>
      )}
    </Space>
  );
};
