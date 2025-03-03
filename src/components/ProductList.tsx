'use client';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useInfiniteProducts } from '@/hook/useInfiniteProducts';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';
import { TInitialData } from '@/types';

const ProductList = ({ initialData }: { initialData: TInitialData }) => {
  const { products } = useInfiniteProducts(initialData);

  const [loadedProducts, setLoadedProducts] = useState<TInitialData>([]);

  const [filteredProducts, setFilteredProducts] = useState<TInitialData>(loadedProducts);

  useEffect(() => {
    if (products?.status === 'success') {
      const allLoadedProducts = products?.data?.pages?.flatMap((page) => page?.data?.data || []) || [];
      console.log({ allLoadedProducts });
      setLoadedProducts(allLoadedProducts);
      setFilteredProducts(allLoadedProducts);
    }
  }, [products?.data?.pages, products?.status]);

  console.log({ products });

  return (
    <Container maxWidth="lg">
      <SearchInput products={loadedProducts} setFilteredProducts={setFilteredProducts} />
      {products.isError ? (
        <Typography variant="body2" component="p" className="text-center text-green-600">
          Error
        </Typography>
      ) : (
        <Box component="section">
          <InfiniteScroll
            pageStart={1}
            loadMore={() => {
              products.fetchNextPage();
            }}
            hasMore={products.hasNextPage}
            loader={
              <Box key="loader" className="flex justify-center items-center h-40">
                <CircularProgress color="success" />
              </Box>
            }
            threshold={100}
          >
            {filteredProducts.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, _idx) => (
                  <ProductCard key={product?.sku || _idx} product={product} />
                ))}
              </div>
            ) : (
              <Typography variant="body2" component="p" className="text-center text-green-600">
                Sorry, we couldn&apos;t find any products matching your search. Please try using different keywords or
                check your spelling.
              </Typography>
            )}
          </InfiniteScroll>
        </Box>
      )}
    </Container>
  );
};

export default ProductList;
