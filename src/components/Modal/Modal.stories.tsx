import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import Button from '../Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  // Removemos os args daqui para controlar no template
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Criamos uma história que usa o estado para controlar o modal
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    // As props do Modal agora são definidas aqui
    title: 'Título do Modal',
    children: (
      <div>
        <p>Este é o conteúdo do modal.</p>
        <p>Ele agora é controlado pelo estado da história.</p>
      </div>
    ),
  },
};