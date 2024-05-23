import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CustomOverlay } from './MainTable.styles';
import './mainTable.styles.css';

function CustomNoRowsOverlay() {
  return <CustomOverlay>Sem resultados</CustomOverlay>;
}

export default function MainTable({
  columns,
  rows,
  isLoading,
  idSelector,
}: {
  columns: GridColDef[];
  rows: Array<any>;
  isLoading: boolean;
  idSelector: string;
}) {
  return (
    <DataGrid
      sx={{
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
          outline: 'none !important',
        },
        '&>.MuiDataGrid-main': {
          '&>.MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
          },
        },
        '& div div div div >.MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '.MuiDataGrid-columnHeader:focus-within': {
          outline: 'none !important',
        },
        '.MuiDataGrid-filler': {
          display: 'none',
        },
      }}
      slots={{ noRowsOverlay: CustomNoRowsOverlay }}
      disableColumnMenu
      hideFooter={true}
      loading={isLoading}
      rows={rows}
      columns={columns}
      getRowId={(row) => row[idSelector]}
      autoHeight={true}
      /*   slots={{
        loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
      }} */
    />
  );
}
