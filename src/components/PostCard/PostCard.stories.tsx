import type { Meta, StoryObj } from '@storybook/nextjs';
import PostCard from '.';

const meta: Meta<typeof PostCard> = {
  title: 'Components/PostCard',
  component: PostCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    title: 'Explorando o Poder do Nest.js',
    author: 'João Colombari',
    summary:
      'Neste post, vamos mergulhar fundo no framework Nest.js, explorando sua arquitetura modular, sistema de injeção de dependências e como ele se integra com o TypeScript para criar APIs robustas e escaláveis.',
  },
};