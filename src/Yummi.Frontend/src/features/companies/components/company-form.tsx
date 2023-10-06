import { FormItem } from '@/components/form';
import { CreateCompanyDto } from '@/features/companies/services';
import { Button, Form, Input, Space } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateCompanyDto, any>;
  isSubmitting?: boolean;
};

export const CompanyForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting
}: Props) => {
  const { t } = useTranslation('companies');

  return (
    <Form
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem<CreateCompanyDto>
        control={control}
        label={t('company-form.form.name')}
        name="name"
        required
      >
        <Input />
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
