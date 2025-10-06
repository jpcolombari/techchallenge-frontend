import type { Meta, StoryObj } from '@storybook/nextjs';
import PostForm from '.';

const meta: Meta<typeof PostForm> = {
  title: 'Components/PostForm',
  component: PostForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof PostForm>;

export const CreateMode: Story = {
  name: 'Modo de Criação (Vazio)',
  args: {},
};

export const EditMode: Story = {
  name: 'Modo de Edição (Preenchido)',
  args: {
    initialData: {
      title: 'Post Existente para Edição',
      author: 'João Colombari',
      content:
        'Este é o conteúdo de um post que foi carregado da API para ser editado.',
    },
  },
};