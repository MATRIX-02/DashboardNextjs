'use client';

import { useSearchParams } from 'next/navigation';
import { useQueryState } from 'nuqs';

export const STATUS_OPTIONS = [
  { label: 'SO Created', value: 'SO Created' },
  { label: 'Process PO', value: 'Process PO' }
];

export function useSalesOrderTableFilters() {
  const [statusFilter, setStatusFilter] = useQueryState('status');
  const [page, setPage] = useQueryState('page');
  const [searchQuery, setSearchQuery] = useQueryState('q');

  const searchParams = useSearchParams();
  const isAnyFilterActive = Boolean(
    searchParams.get('status') || searchParams.get('q')
  );

  const resetFilters = () => {
    setStatusFilter(null);
    setSearchQuery(null);
    setPage('1');
  };

  return {
    statusFilter,
    setStatusFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    setPage
  };
}
