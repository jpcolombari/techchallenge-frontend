import type { Meta, StoryObj } from '@storybook/react';
import Heading from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Título Grande (padrão)',
    as: 'h1',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Título Médio',
    as: 'h2',
    size: 'medium',
  },
};