'use client';

import React from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { SalesOrder } from '@/types';

interface SalesOrderTableProps {
  data: SalesOrder[];
  totalData: number;
}

export default function SalesOrderTable({ data }: SalesOrderTableProps) {
  // Define the columns
  const columns: MRT_ColumnDef<SalesOrder>[] = [
    {
      accessorKey: 'Customer ID',
      header: 'Customer ID',
      size: 180
    },
    {
      accessorKey: 'Customer Name',
      header: 'Customer Name',
      size: 180
    },
    {
      accessorKey: 'Customer Purchase Order',
      header: 'Customer Purchase Order #',
      size: 300
    },
    {
      accessorKey: 'Ticket Reference',
      header: 'Ticket Reference #',
      size: 180
    },
    {
      accessorKey: 'PO Date',
      header: 'PO Date',
      size: 180
    },
    {
      accessorKey: 'Sales Order',
      header: 'Sales Order #',
      size: 180
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 180,
      Cell: ({ row }) => (
        <span>{row.original['Sales Order'] ? 'SO Created' : 'Process PO'}</span>
      )
    }
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableStickyHeader: true,
    enableColumnOrdering: true,
    enableRowSelection: false,
    enableSorting: true,
    initialState: {
      showGlobalFilter: true,
      columnPinning: { right: ['mrt-row-actions'] }
    },
    muiSearchTextFieldProps: {
      placeholder: `Search cost centers`,
      sx: { minWidth: '300px' },
      variant: 'outlined'
    },
    enableGlobalFilter: true,
    globalFilterFn: 'contains',
    positionGlobalFilter: 'left',
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined'
    },
    paginationDisplayMode: 'pages',
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        backgroundColor: 'transparent',
        '& .MuiBox-root': {
          backgroundColor: 'transparent'
        }
      }
    },
    muiTableContainerProps: {
      sx: {
        border: '1px solid #E0E0E0'
      }
    },
    muiTableHeadRowProps: {
      sx: {
        backgroundColor: 'transparent'
      }
    },
    muiTableProps: {
      sx: {
        backgroundColor: 'transparent'
      }
    },
    muiTableBodyRowProps: {
      sx: {
        backgroundColor: 'transparent'
      }
    }
  });

  return <MaterialReactTable table={table} />;
}
