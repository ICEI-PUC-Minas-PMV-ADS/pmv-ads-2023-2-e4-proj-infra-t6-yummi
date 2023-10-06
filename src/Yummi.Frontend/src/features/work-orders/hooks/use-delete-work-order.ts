import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { IWorkOrder } from '../entities';
import { deleteWorkOrder } from '../services';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteWorkOrder = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('workOrders', { keyPrefix: 'list-orders' });
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteWorkOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-workorders']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IWorkOrder>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: data => mutateAsync(data.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
