import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './index';

const meta = {
  title: 'components/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
