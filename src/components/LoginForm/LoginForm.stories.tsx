import type { Meta, StoryObj } from '@storybook/nextjs';
import LoginForm from '.';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    module: {
      mock: (path: string) => { // <-- Adicionamos o tipo 'string' aqui
        if (path.includes('@/contexts/AuthContext')) {
          return {
            __esModule: true,
            useAuth: () => ({
              login: async (token: string) => {
                alert(`Login chamado com o token: ${token}`);
              },
            }),
          };
        }
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSuccess: () => alert('Login bem-sucedido!'),
  },
};