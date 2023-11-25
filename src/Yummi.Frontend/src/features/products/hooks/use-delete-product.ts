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
      window.location.reload();
      queryClient.invalidateQueries(['list-products']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IProduct>({
    title: t('Excluir o produto'),
    description: t('Deseja excluir o produto?'),
    onConfirm: product => mutateAsync(product.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
