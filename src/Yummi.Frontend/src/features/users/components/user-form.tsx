import { FormItem } from '@/components/form';
import { useListCompanies } from '@/features/companies/services';
import { useListUnits } from '@/features/units/services';
import { CreateUserDto } from '@/features/users/services';
import { Button, Form, Input, Select, Space } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateUserDto, any>;
  isSubmitting?: boolean;
};

export const UserForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting
}: Props) => {
  const { t } = useTranslation('users');
  const { data: companies } = useListCompanies();
  const { data: units } = useListUnits();

  return (
    <Form
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateUserDto>
        control={control}
        label={t('form.name')}
        name="name"
        required
      >
        <Input />
      </FormItem>

      <FormItem<CreateUserDto>
        control={control}
        label={t('form.email')}
        name="email"
        required
      >
        <Input />
      </FormItem>

      <FormItem<CreateUserDto>
        control={control}
        label={t('form.companyId')}
        name="companyId"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={units?.map(c => ({ value: c.id, label: c.name }))}
        />
      </FormItem>

      <FormItem<CreateUserDto>
        control={control}
        label={t('form.unitId')}
        name="unitId"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={companies?.map(u => ({ value: u.id, label: u.name }))}
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
