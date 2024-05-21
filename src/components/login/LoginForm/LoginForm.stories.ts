import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './index';

const meta = {
  title: 'LoginForm',
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
