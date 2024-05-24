import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomNoRowsOverlay from './';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { columns, rows } from './MainTable.mocks';

type IPropsTable = {
  columns: GridColDef[];
  rows: GridRowsProp[];
  isLoading: boolean;
  idSelector: string;
};

describe('CustomNoRowsOverlay module', () => {
  const propsNotValue: IPropsTable = {
    columns: [],
    rows: [],
    isLoading: false,
    idSelector: '',
  };

  const props = {
    columns: columns,
    rows: rows,
    isLoading: false,
    idSelector: 'ISPB',
  };

  it('should be render CustomNoRowsOverlay with no data', () => {
    const { getByText } = render(<CustomNoRowsOverlay {...propsNotValue} />);
    expect(getByText('Sem resultados')).toBeInTheDocument();
  });

  it('should be CustomNoRowsOverlay with data ', () => {
    const { getByText } = render(<CustomNoRowsOverlay {...props} />);
    const homeLink = getByText('Código Banco');
    expect(homeLink).toBeInTheDocument();
  });

  it('should be CustomNoRowsOverlay with data rows', () => {
    const { getByText } = render(<CustomNoRowsOverlay {...props} />);
    const homeLink = getByText('Banco do Brasil');
    expect(homeLink).toBeInTheDocument();
  });
});
