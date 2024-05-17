import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import rows from './data';
import { Typography } from '@mui/material';

export default function MainTable() {
  const columns = [
    {
      field: 'customerName',
      headerName: 'Custom Name',
      headerClassName: 'headerDefaultTable',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'carModel',
      headerName: 'Car Model',
      headerClassName: 'headerDefaultTable',
      flex: 1,
      minWidth: 200,
      renderCell: (params: any) => <Typography>{params.value.name}</Typography>,
      sortComparator: (v1: any, v2: any) => v1.name.localeCompare(v2.name),
    },
    {
      field: 'location',
      headerName: 'Location',
      headerClassName: 'headerDefaultTable',
      flex: 1,
      minWidth: 300,
      renderCell: (params: any) => (
        <div>
          <Typography variant="subtitle2">{params.value.name}</Typography>
          <Typography variant="subtitle2">{params.value.address}</Typography>
        </div>
      ),
      sortComparator: (v1: any, v2: any) => v1.name.localeCompare(v2.name),
    },
  ];

  return (
    <div style={{ width: '100%' }}>
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
        rows={rows}
        columns={columns}
      />
    </div>
  );
}
