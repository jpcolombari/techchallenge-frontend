import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from '.';

const meta: Meta<typeof RegisterForm> = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    onSuccess: () => alert('Registro bem-sucedido!'),
  },
};