import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Escreva o conteúdo do post aqui...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Conteúdo do Post',
    placeholder: 'Escreva o conteúdo do post aqui...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Conteúdo do Post',
    value: 'Um conteúdo muito curto.',
    error: 'O conteúdo precisa ter no mínimo 50 caracteres.',
  },
};