import { FormItem } from '@/components/form';
import { useListCompanies } from '@/features/companies/services';
import { CreateUnitDto } from '@/features/units/services';
import { Button, Form, Input, Select, Space } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateUnitDto, any>;
  isSubmitting?: boolean;
};

export const UnitForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting
}: Props) => {
  const { t } = useTranslation('units');
  const { data: companies } = useListCompanies();

  return (
    <Form
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateUnitDto>
        control={control}
        label={t('form.name')}
        name="name"
        required
      >
        <Input />
      </FormItem>

      <FormItem<CreateUnitDto>
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
