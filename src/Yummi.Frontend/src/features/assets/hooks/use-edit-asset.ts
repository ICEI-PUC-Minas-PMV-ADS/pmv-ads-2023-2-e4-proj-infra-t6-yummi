import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IAsset } from '../entities';
import { assetSchema } from '../schemas';
import {
  CreateAssetDto,
  getAsset,
  mapAssetToPayload,
  updateAsset,
  useGetAsset
} from '../services';

export const useEditAsset = (id: number) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetAsset(id);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(assetSchema(t)),
    defaultValues: async () => {
      const asset = await queryClient.fetchQuery<IAsset>(
        ['get-asset', id],
        () => getAsset(id) as Promise<IAsset>
      );
      return mapAssetToPayload(asset);
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data: CreateAssetDto) => updateAsset(id, data),
    onSuccess: asset => {
      navigate(`/assets/${asset.id}`);
      queryClient.invalidateQueries(['list-assets']);
      queryClient.invalidateQueries(['get-asset']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    initialValues: data && mapAssetToPayload(data),
    isSubmitting,
    isLoading
  };
};
