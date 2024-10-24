import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { searchParamsCache } from '@/lib/searchparams';
import { SalesOrder } from '@/types';
import SalesOrderTable from './sales-order-table';

export default async function SalesOrderListingPage() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const status = searchParamsCache.get('status');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(status && { status })
  };

  // Replace with your API call
  const response = await fetch(
    `${process.env.NEXT_SALES_ORDER}/sales_tracking`,
    {
      next: { revalidate: 60 } // Cache for 60 seconds
    }
  );
  const data = await response.json();

  const salesOrders: SalesOrder[] = data;
  const totalOrders = salesOrders.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4 ">
        <div className="flex items-start justify-between">
          <Heading
            title={`Track Sales Order (${totalOrders})`}
            description="Real-Time Monitoring: Keep Your Intake Requests on Track with Ease."
          />
        </div>
        <Separator />
        <SalesOrderTable data={salesOrders} totalData={totalOrders} />
      </div>
    </PageContainer>
  );
}
