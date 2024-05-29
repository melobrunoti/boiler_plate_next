import { getAccessLevel, getBanks } from '@/api/home/fetchers';
import { getAccessLevelMutation, getBanksQery } from '@/api/home/queries';
import MainTable from '@/components/_ui/MainTable';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useMutation} from '@tanstack/react-query';

export default function HomeBanksTable() {
  const { data, isLoading, isError, isSuccess} = getBanksQery()
  const mutation = getAccessLevelMutation()

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
    {
      headerName: 'Ações',
      field: 'actions',
      headerClassName: 'headerDefaultTable',
      renderCell: () => (
        <div>
          <DeleteIcon color="error" />
        </div>
      ),
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <>
    <Button variant='contained' onClick={()=> mutation.mutate()}>dispara request</Button>
      {
        <MainTable
          isLoading={isLoading}
          rows={data ? data : []}
          columns={columns}
          idSelector="CODBANCO"
        ></MainTable>
      }

     
    </>
  );
}
