import type { Meta, StoryObj } from '@storybook/react';
import BackButton from '.';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};