import { getProducts } from '@/services/productService';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const initialData = await getProducts({ page: '1' });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>PinApp Challenge</h1>
      <ProductList initialData={initialData} />
    </div>
  );
}
