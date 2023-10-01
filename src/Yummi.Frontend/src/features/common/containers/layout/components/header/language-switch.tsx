import { useIsMobile } from '@/hooks';
import Icon from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { MdGTranslate } from 'react-icons/md';

const items = [
  {
    key: 'pt',
    label: 'Português'
  },
  {
    key: 'en',
    label: 'English'
  }
];

export const LanguageSwitch = (): JSX.Element => {
  const { i18n, t } = useTranslation('layout');
  const isMobile = useIsMobile();

  return (
    <Dropdown
      menu={{
        items: items.map(item => ({
          ...item,
          onClick: () => i18n.changeLanguage(item.key)
        })),
        className: '!p-2'
      }}
      trigger={['click']}
      arrow
    >
      <Button
        aria-label={t('change-language')}
        size="large"
        type="primary"
        icon={<Icon component={MdGTranslate} />}
      >
        {isMobile ? null : t('change-language')}
      </Button>
    </Dropdown>
  );
};
