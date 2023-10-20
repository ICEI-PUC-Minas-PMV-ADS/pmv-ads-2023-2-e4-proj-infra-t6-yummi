import { FormItem } from '@/components/form';
import { CreateWorkOrderDto } from '@/features/work-orders/services';
import { Button, Form, Input, Select, Space } from 'antd';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { OrderStatus } from '../entities';

type Props = {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void | Promise<void>;
  onCancel?: () => void;
  control: Control<CreateWorkOrderDto, any>;
  isSubmitting?: boolean;
  initialValues?: Partial<CreateWorkOrderDto>;
};

export const WorkOrderForm = ({
  handleSubmit,
  onCancel,
  control,
  isSubmitting
}: Props) => {
  const { t } = useTranslation('workOrders');

  return (
    <Form
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem control={control} label={t('Produto')} name="title" required>
        <Input />
      </FormItem>

      <FormItem control={control} label={t('Categoria')} name="title" required>
        <Select
          placeholder={t('dictionary:select')}
          allowClear
        >
          {[
            'Entradas',
            'Pratos Principais',
            'Drinks e Bebidas',
            'Sobremesas'
          ].map(category => (
            <Select.Option key={category} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<CreateWorkOrderDto>
        control={control}
        label={t('form.status')}
        name="status"
        required
        className="w-full"
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={Object.values(OrderStatus)?.map(p => ({
            value: p,
            label: t(`status.${p}`)
          }))}
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