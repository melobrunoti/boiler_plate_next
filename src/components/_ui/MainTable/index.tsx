import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CustomOverlay } from './MainTable.styles';
import Skeleton from '@mui/material/Skeleton';
import './mainTable.styles.css';
import { Box, TableCell, TableRow } from '@mui/material';

function CustomNoRowsOverlay() {
  return <CustomOverlay>Sem resultados</CustomOverlay>;
}

function CustomLoadingOverlay() {
  return (
    <Box
      sx={{
        height: 'max-content',
      }}
    >
      {[...Array(3)].map((_) => (
        <Skeleton variant="rectangular" sx={{ my: 2, mx: 1 }} />
      ))}
    </Box>
  );
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
      slots={{
        noRowsOverlay: CustomNoRowsOverlay,
        loadingOverlay: CustomLoadingOverlay,
      }}
      disableColumnMenu
      hideFooter={true}
      loading={isLoading}
      rows={isLoading ? [] : rows}
      columns={columns}
      getRowId={(row) => row[idSelector]}
      autoHeight={true}
      /*    slots={{
        loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
      }} */
    />
  );
}
