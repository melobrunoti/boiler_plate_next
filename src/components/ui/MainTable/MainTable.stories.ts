import type { Meta, StoryObj } from '@storybook/react';

import MainTable from './index';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { MainTableProps } from './types';

const columns: GridColDef[] = [
  {
    field: 'CODBANCO',
    type: 'number',
    headerName: 'Código Banco',
    headerClassName: 'headerDefaultTable',
    flex: 1,
    minWidth: 200,
    headerAlign: 'left',
    align: 'left',
  },
  {
    field: 'DESCRICAO',
    headerName: 'Descrição',
    headerClassName: 'headerDefaultTable',
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'ISPB',
    headerName: 'ISPB',
    headerClassName: 'headerDefaultTable',
    flex: 1,
    minWidth: 200,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows: MainTableProps[] = [
  {
    CODBANCO: 1,
    DESCRICAO: 'Banco do Brasil',
    ISPB: '00000000',
  },
  {
    CODBANCO: 2,
    DESCRICAO: 'Banco Inter',
    ISPB: '00000001',
  },
  {
    CODBANCO: 3,
    DESCRICAO: 'Nubank',
    ISPB: '00000002',
  },
];
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
