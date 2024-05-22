import type { Meta, StoryObj } from '@storybook/react';
import MainTable from './index';
import { columns, rows } from './MainTable.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main table',
  component: MainTable,
  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof MainTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    columns: columns,
    rows: rows,
    isLoading: false,
    idSelector: 'CODBANCO',
  },
};
