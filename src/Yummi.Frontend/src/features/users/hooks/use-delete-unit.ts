import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { IUser } from '../entities';
import { deleteUser } from '../services';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteUser = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('listUsers');
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteUser, {
    onSuccess: () => {
      window.location.reload();
      queryClient.invalidateQueries(['list-users']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IUser>({
    title: t('Excluir Usuário'),
    description: t('Deseja excluir o usuário?'),
    onConfirm: user => mutateAsync(user.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
