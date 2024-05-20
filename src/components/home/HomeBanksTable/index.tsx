import { getBanks } from '@/api/home/fetchers';
import MainTable from '@/components/ui/mainTable';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery } from '@tanstack/react-query';

export default function HomeBanksTable() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getBanks'],
    queryFn: () =>
      getBanks().then((res) => {
        return res.json();
      }),
  });

  const columns = [
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
