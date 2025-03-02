'use client';

import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteProducts } from '@/hook/useInfiniteProducts';
import { TInitialData } from '@/types';

const ProductList = ({ initialData }: { initialData: TInitialData }) => {
  const { products } = useInfiniteProducts(initialData);

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={() => {
        products.fetchNextPage();
      }}
      hasMore={products.hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
      threshold={100}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.data?.pages
          .flatMap((page) => page.data.data)
          .map((product) => {
            return (
              <div key={product.sku} className="bg-white p-4 h-40 m-4 w-full rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
                <h1 className="text-xl font-bold text-gray-800">{product.sku}</h1>
                <Link href={`/products/${product.sku}`} className="text-blue-500">
                  Ver Detalle
                </Link>
              </div>
            );
          })}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
