import { getProducts } from '@/services/productService';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteProducts = () => {
  const products = useInfiniteQuery({
    queryKey: ['productsQuery'],
    queryFn: async (data) => {
      const response = await getProducts({ page: data.pageParam });
      return response;
    },
    initialPageParam: '1',
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.next ? lastPage.data.next : undefined;
    },
  });

  return { products };
};
