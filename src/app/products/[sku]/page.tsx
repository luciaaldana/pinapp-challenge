import { getProductBySku } from '@/services/productService';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { sku: string } }) {
  const sku = params.sku;

  const { data } = await getProductBySku(sku);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-50">{data.name}</h1>
      <p>SKU: {sku}</p>
      <p>{data.description}</p>
    </div>
  );
}
