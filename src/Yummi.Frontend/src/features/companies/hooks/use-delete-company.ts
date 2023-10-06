import { useConfirmationModal } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { ICompany } from '../entities';
import { deleteCompany } from '../services';

type Props = {
  onSuccess?: () => void;
};

export const useDeleteCompany = ({ onSuccess }: Props = {}) => {
  const { t } = useTranslation('companies', { keyPrefix: 'list-companies' });
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-companies']);
      onSuccess?.();
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<ICompany>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: company => mutateAsync(company.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
