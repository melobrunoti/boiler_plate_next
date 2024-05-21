import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function CustomNoRowsOverlay() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Center',
        paddingTop: '2rem',
      }}
    >
      Sem resultados
    </div>
  );
}

export default function MainTable({
  columns,
  rows,
  isLoading,
  idSelector,
}: {
  columns: any[];
  rows: any[];
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
