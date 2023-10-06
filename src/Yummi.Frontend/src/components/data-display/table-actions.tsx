import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props<T> = {
  data: T;
  viewHref?: string;
  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;
};

export const TableActions = <T,>({
  data,
  viewHref,
  onDelete,
  onEdit
}: Props<T>): JSX.Element => {
  const { t } = useTranslation('dictionary');

  const items = useMemo(() => {
    return [
      {
        key: 'edit',
        label: t('edit'),
        icon: <EditOutlined />,
        onClick: () => onEdit?.(data),
        disabled: !onEdit
      },
      {
        key: 'delete',
        label: t('delete'),
        icon: <DeleteOutlined />,
        onClick: () => onDelete?.(data),
        danger: true,
        disabled: !onDelete
      }
    ].filter(item => !item.disabled);
  }, [data, onDelete, onEdit, t]);

  return (
    <Space>
      {viewHref && (
        <Tooltip title={t('view')}>
          <Link to={viewHref}>
            <Button icon={<EyeOutlined />} aria-label={t('view')} />
          </Link>
        </Tooltip>
      )}
      <Dropdown trigger={['click']} menu={{ items }} placement="bottom" arrow>
        <Button icon={<MoreOutlined />}></Button>
      </Dropdown>
    </Space>
  );
};
