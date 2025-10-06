import type { Meta, StoryObj } from '@storybook/nextjs';
import ConfirmationModal from '.';

const meta: Meta<typeof ConfirmationModal> = {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirmar Ação',
    message: 'Você tem certeza que deseja executar esta ação?',
  },
};