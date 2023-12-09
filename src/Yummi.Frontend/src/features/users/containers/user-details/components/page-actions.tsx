import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {
  onDelete: () => void;
};

export const PageActions = ({ onDelete }: Props): JSX.Element => {
  const { t } = useTranslation('dictionary');

  const items = useMemo(() => {
    return [
      {
        key: 'edit',
        label: t('edit'),
        icon: <EditOutlined />,
        link: 'edit'
      },
      {
        key: 'delete',
        label: t('delete'),
        icon: <DeleteOutlined />,
        danger: true,
        onClick: onDelete
      }
    ];
  }, [onDelete, t]);

  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items: items.map(item => ({
          ...item,
          label: item.link ? (
            <Link to={item.link}>{item.label}</Link>
          ) : (
            item.label
          )
        }))
      }}
    >
      <Button icon={<MoreOutlined />} size="large">
        {t('options')}
      </Button>
    </Dropdown>
  );
};
