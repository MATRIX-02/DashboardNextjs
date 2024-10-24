const BASE_URL = process.env.NEXT_SALES_ORDER;

export async function handleDownload(poNumber: string) {
  try {
    const response = await fetch(`${BASE_URL}/pdf/${poNumber}`);
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `po_number_${poNumber}.xlsx`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Error downloading PO:', error);
  }
}

export async function handlePushToErp(salesOrderNo: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/download_sales_order/${salesOrderNo}`
    );
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sales_order_${salesOrderNo}.xlsx`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Error downloading sales order:', error);
  }
}
