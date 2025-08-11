import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Digite seu nome',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nome Completo',
    placeholder: 'Digite seu nome',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu-email@exemplo.com',
    icon: faEnvelope,
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email inválido',
    icon: faEnvelope,
    type: 'email',
    error: 'Por favor, insira um email válido.',
  },
};