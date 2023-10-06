import { StatusEnum } from '@/features/assets/entities';

export const mapStatusToColor = (status: string) => {
  const map: Record<StatusEnum, string> = {
    inAlert: 'warning',
    inOperation: 'success',
    inDowntime: 'error',
    plannedStop: 'default',
    unplannedStop: 'error'
  };

  return map[status as StatusEnum];
};
