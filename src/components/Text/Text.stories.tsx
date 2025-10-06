import type { Meta, StoryObj } from '@storybook/nextjs';
import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      'Este é um componente de texto padrão, usado para parágrafos e descrições na aplicação.',
  },
};

export const Small: Story = {
  args: {
    children: 'Este é um texto menor, que pode ser usado para legendas.',
    size: 'small',
  },
};