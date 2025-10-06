import type { Meta, StoryObj } from '@storybook/nextjs';
import LoginModal from '.';

const meta: Meta<typeof LoginModal> = {
  title: 'Components/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {};