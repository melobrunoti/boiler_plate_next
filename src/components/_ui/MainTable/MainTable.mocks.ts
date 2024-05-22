import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { MainTableProps } from './types';


export const columns: GridColDef[] = [
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
  
export const rows: MainTableProps[] = [
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