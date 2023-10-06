import { FormItem } from '@/components/form';
import { useListAssets } from '@/features/assets/services';
import { useListUsers } from '@/features/users/services';
import { CreateWorkOrderDto } from '@/features/work-orders/services';
import { MinusCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Select, Space, Tooltip } from 'antd';
import { Control, useController, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { OrderStatus, WorkOrderPriority } from '../entities';

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
  const { data: assets } = useListAssets();
  const { data: users } = useListUsers();

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'checklist' as never
  });
  const { fieldState: checklistState } = useController({
    control,
    name: 'checklist'
  });

  return (
    <Form
      onFinish={handleSubmit}
      className="w-full max-w-2xl"
      layout="vertical"
    >
      <FormItem
        control={control}
        label={t('form.assetId')}
        name="assetId"
        required
      >
        <Select
          placeholder={t('dictionary:select')}
          allowClear
          options={assets?.map(a => ({ value: a.id, label: a.name }))}
        />
      </FormItem>

      <FormItem
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

      <Divider />

      <FormItem control={control} label={t('form.title')} name="title" required>
        <Input />
      </FormItem>

      <FormItem
        control={control}
        label={t('form.description')}
        name="description"
        required
      >
        <Input.TextArea />
      </FormItem>

      <Divider />

      <Form.Item
        label={t('form.checklist')}
        required
        className="mb-8"
        validateStatus={checklistState.error?.message ? 'error' : 'success'}
        help={checklistState.error?.message}
      >
        <Input.Search
          onSearch={value => append(value)}
          enterButton={t('form.add-checklist')}
        />
      </Form.Item>

      {fields.length > 0 && (
        <ul>
          {fields?.map((field, index) => (
            <li
              key={field.id}
              className="mb-6 inline-flex w-full items-center gap-2"
            >
              <FormItem<CreateWorkOrderDto>
                control={control}
                name={`checklist.${index}`}
                required
                className="mb-0 w-full max-w-md"
              >
                <Input />
              </FormItem>
              <Tooltip title={t('form.remove-checklist')}>
                <MinusCircleOutlined
                  className="dynamic-delete-button"
                  onClick={() => remove(index)}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      )}

      <Divider />

      <Form.Item className="m-0 w-full">
        <div className="flex w-full flex-col gap-0 md:flex-row md:gap-5">
          <FormItem<CreateWorkOrderDto>
            control={control}
            label={t('form.priority')}
            name="priority"
            required
            className="w-full"
          >
            <Select
              placeholder={t('dictionary:select')}
              allowClear
              options={Object.values(WorkOrderPriority)?.map(p => ({
                value: p,
                label: t(`priority.${p}`)
              }))}
            />
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
        </div>
      </Form.Item>

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
