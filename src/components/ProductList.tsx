'use client';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, Container } from '@mui/material';
import { useInfiniteProducts } from '@/hook/useInfiniteProducts';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';
import { TInitialData } from '@/types';

const ProductList = ({ initialData }: { initialData: TInitialData }) => {
  const { products } = useInfiniteProducts(initialData);

  const [loadedProducts, setLoadedProducts] = useState(products.data?.pages.flatMap((page) => page.data.data) || []);

  const [filteredProducts, setFilteredProducts] = useState(loadedProducts);

  useEffect(() => {
    if (products.data) {
      const allLoadedProducts = products.data.pages.flatMap((page) => page.data.data);
      setLoadedProducts(allLoadedProducts);
      setFilteredProducts(allLoadedProducts);
    }
  }, [products.data]);

  return (
    <Container maxWidth="lg">
      <SearchInput products={loadedProducts} setFilteredProducts={setFilteredProducts} />
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
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
            {filteredProducts.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </InfiniteScroll>
      </Box>
    </Container>
  );
};

export default ProductList;
