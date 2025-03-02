'use client';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteProducts } from '@/hook/useInfiniteProducts';

export default function Home() {
  const { products } = useInfiniteProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>PinApp Challenge</h1>
      <InfiniteScroll
        pageStart={1}
        loadMore={(page) => {
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
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
