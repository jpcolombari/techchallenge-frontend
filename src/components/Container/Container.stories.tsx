import type { Meta, StoryObj } from '@storybook/react';
import Container from '.';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: '#eaeaea', padding: '16px', textAlign: 'center' }}>
        Este conteúdo está dentro do container. Redimensione a tela para ver o
        efeito da largura máxima.
      </div>
    ),
  },
};