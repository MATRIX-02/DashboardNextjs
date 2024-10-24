import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs/parsers';
import React from 'react';
import SalesOrderListingPage from './_components/sales-order-listing-page';

type PageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Track Sales Order'
};

export default async function Page({ searchParams }: PageProps) {
  searchParamsCache.parse(searchParams);
  return <SalesOrderListingPage />;
}
