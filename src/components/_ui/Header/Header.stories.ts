import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta = {
  title: 'Header',
  component: Header,

  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
