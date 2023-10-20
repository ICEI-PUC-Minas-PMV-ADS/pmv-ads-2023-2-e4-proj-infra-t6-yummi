import { FormItem } from '@/components/form';
import { CreateUserDto } from '@/features/users/services';
import { Button, Form, Input, Space } from 'antd';
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
        label={t('Senha')}
        name="password"
        required
      >
      <Input.Password
        name="password"
        required
      />
      </FormItem>

      <FormItem<CreateUserDto>
        control={control}
        label={t('Confirme sua senha')}
        name="confirmPassword"
        required
      >
      <Input.Password
        name="confirmPassword"
        required
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
