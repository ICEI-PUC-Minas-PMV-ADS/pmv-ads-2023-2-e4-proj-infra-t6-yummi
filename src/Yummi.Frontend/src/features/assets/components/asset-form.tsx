import { FormItem } from '@/components/form';
import { StatusEnum } from '@/features/assets/entities';
import { CreateAssetDto } from '@/features/assets/services';
import { useListCompanies } from '@/features/companies/services';
import { useListUnits } from '@/features/units/services';
import { useListUsers } from '@/features/users/services';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateAssetDto, any>;
  isSubmitting?: boolean;
  initialValues?: Partial<CreateAssetDto>;
};

export const AssetForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting,
  initialValues
}: Props) => {
  const { t } = useTranslation('createAsset');
  const { data: users } = useListUsers();
  const { data: units } = useListUnits();
  const { data: companies } = useListCompanies();

  return (
    <Form
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.name')}
        name="name"
        required
      >
        <Input />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.model')}
        name="model"
        required
      >
        <Input />
      </FormItem>

      <Form.Item className="m-0 w-full">
        <div className="flex w-full flex-col gap-0 md:flex-row md:gap-5">
          <FormItem<CreateAssetDto>
            control={control}
            label={t('form.maxTemp')}
            name="maxTemp"
          >
            <InputNumber min={0} className="w-full" />
          </FormItem>
          <FormItem<CreateAssetDto>
            control={control}
            label={t('form.power')}
            name="power"
          >
            <InputNumber min={0} className="w-full" />
          </FormItem>
          <FormItem<CreateAssetDto>
            control={control}
            label={t('form.rpm')}
            name="rpm"
          >
            <InputNumber min={0} className="w-full" />
          </FormItem>
        </div>
      </Form.Item>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.status')}
        name="status"
        required
      >
        <Select placeholder={t('dictionary:select')} allowClear>
          {Object.values(StatusEnum).map(status => (
            <Select.Option key={status} value={status}>
              {t(`common:asset-status.${status}`)}
            </Select.Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.companyId')}
        name="companyId"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={companies?.map(c => ({ value: c.id, label: c.name }))}
        />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.unitId')}
        name="unitId"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={units?.map(u => ({ value: u.id, label: u.name }))}
        />
      </FormItem>

      <FormItem<CreateAssetDto>
        control={control}
        label={t('form.assignedUserIds')}
        name="assignedUserIds"
        required
      >
        <Select
          mode="multiple"
          placeholder={t('dictionary:select')}
          allowClear
          options={users?.map(u => ({ value: u.id, label: u.name }))}
        />
      </FormItem>

      <Space className="w-full justify-end">
        <Button htmlType="button" onClick={onCancel}>
          {t('dictionary:cancel')}
        </Button>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          {t('dictionary:save')}
        </Button>
      </Space>
    </Form>
  );
};
