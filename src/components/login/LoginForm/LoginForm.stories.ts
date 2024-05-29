import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '.';

const meta = {
  title: 'components/login/LoginForm',
  component: LoginForm,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
