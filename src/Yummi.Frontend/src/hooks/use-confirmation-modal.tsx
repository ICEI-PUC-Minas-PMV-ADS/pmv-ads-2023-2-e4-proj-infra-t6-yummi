import { Modal } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type Props<T> = {
  title: string;
  description: string;
  onConfirm: (data: T) => void;
};

export const useConfirmationModal = <T,>({
  description,
  onConfirm,
  title
}: Props<T>) => {
  const [modal, contextHolder] = Modal.useModal();
  const { t } = useTranslation('dictionary');

  const openModal = useCallback(
    (data: T) => {
      modal.confirm({
        title,
        content: description,
        onOk: () => onConfirm(data),
        okText: t('yes'),
        cancelText: t('no')
      });
    },
    [description, modal, onConfirm, t, title]
  );

  return {
    openModal,
    modal: contextHolder
  };
};
