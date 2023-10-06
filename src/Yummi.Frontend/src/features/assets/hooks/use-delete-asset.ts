import { IAsset } from '@/features/assets/entities';
import { deleteAsset } from '@/features/assets/services';
import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteAsset = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('listAssets');
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteAsset, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-assets']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IAsset>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: asset => mutateAsync(asset.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
