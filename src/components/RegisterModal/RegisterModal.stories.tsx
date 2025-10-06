import type { Meta, StoryObj } from '@storybook/nextjs';
import RegisterModal from '.';

const meta: Meta<typeof RegisterModal> = {
  title: 'Components/RegisterModal',
  component: RegisterModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterModal>;

export const Default: Story = {};
