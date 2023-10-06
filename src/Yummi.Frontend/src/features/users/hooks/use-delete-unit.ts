import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { IUser } from '../entities';
import { deleteUser } from '../services';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteUser = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('users', { keyPrefix: 'list-users' });
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-users']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IUser>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: user => mutateAsync(user.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
