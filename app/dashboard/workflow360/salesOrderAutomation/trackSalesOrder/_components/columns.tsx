'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Download, FileX } from 'lucide-react';
import { SalesOrder } from '@/types';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { handleDownload, handlePushToErp } from './utils';

export const columns: ColumnDef<SalesOrder>[] = [
  {
    accessorKey: 'Customer ID',
    header: 'Customer ID'
  },
  {
    accessorKey: 'Customer Name',
    header: 'Customer Name'
  },
  {
    accessorKey: 'Customer Purchase Order',
    header: 'Customer Purchase Order #',
    cell: ({ row }) => (
      <Button
        variant="link"
        onClick={() => handleDownload(row.original['Customer Purchase Order'])}
      >
        {row.original['Customer Purchase Order']}
      </Button>
    )
  },
  {
    accessorKey: 'Ticket Reference',
    header: 'Ticket Reference #'
  },
  {
    accessorKey: 'PO Date',
    header: 'PO Date'
  },
  {
    accessorKey: 'Sales Order',
    header: 'Sales Order #'
  },
  {
    id: 'attachments',
    header: 'Attachments',
    cell: ({ row }) => {
      const salesOrder = row.original['Sales Order'];

      if (salesOrder) {
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePushToErp(salesOrder)}
              >
                <Download className="h-4 w-4 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download</TooltipContent>
          </Tooltip>
        );
      }

      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <FileX className="h-4 w-4 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>No Sales Order Created</TooltipContent>
        </Tooltip>
      );
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const salesOrder = row.original['Sales Order'];

      if (salesOrder) {
        return <span>SO Created</span>;
      }

      return (
        <Link
          href={`/workflow360/salesOrderAutomation/createSalesOrder/${encodeURIComponent(
            row.original['Customer Purchase Order']
          )}`}
          className="text-primary hover:underline"
        >
          Process PO
        </Link>
      );
    }
  }
];
