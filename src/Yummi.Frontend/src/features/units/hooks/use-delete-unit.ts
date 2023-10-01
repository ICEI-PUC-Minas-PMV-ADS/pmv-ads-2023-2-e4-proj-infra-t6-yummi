import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { IUnit } from '../entities';
import { deleteUnit } from '../services';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteUnit = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('units', { keyPrefix: 'list-units' });
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteUnit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-units']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IUnit>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: unit => mutateAsync(unit.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
