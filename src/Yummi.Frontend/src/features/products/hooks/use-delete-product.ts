import { IProduct } from '@/features/products/entities';
import { deleteProduct } from '@/features/products/services';
import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteProduct = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('listProducts');
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-products']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IProduct>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: product => mutateAsync(product.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
