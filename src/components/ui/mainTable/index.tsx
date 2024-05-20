import { DataGrid } from '@mui/x-data-grid';

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
      disableColumnMenu
      hideFooter={true}
      loading={isLoading}
      rows={rows}
      columns={columns}
      getRowId={(row) => row[idSelector]}
      /*   slots={{
        loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
      }} */
    />
  );
}
