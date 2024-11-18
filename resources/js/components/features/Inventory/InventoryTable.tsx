import DataTable from '@/components/common/DataTable';
import { InventoryData } from '@/types/common';
import { ColumnDef } from '@tanstack/react-table';

// column
const columns: ColumnDef<InventoryData>[] = [
  {
    id: 'id',
    header: 'ID',
    meta: { className: 'w-16' },
    cell: (info) => info.row.index,
  },

  {
    id: 'name',
    header: 'Product Name',
    cell: (info) => info.row.original.name,
  },

  {
    id: 'variant',
    header: 'Variant (mL)',
    cell: (info) => info.row.original.price,
  },

  {
    id: 'price',
    header: 'Price',
    cell: (info) => info.row.original.price,
  },

  {
    id: 'description',
    header: 'Description',
    cell: (info) => info.row.original.description,
  },
];

export default function InventoryTable() {
  return <DataTable data={[]} columns={columns} isLoading />;
}
