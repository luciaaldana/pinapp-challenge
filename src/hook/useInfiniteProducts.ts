import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/productService';
import { TInitialData } from '@/types';

export const useInfiniteProducts = (initialData?: TInitialData) => {
  const products = useInfiniteQuery({
    queryKey: ['productsQuery'],
    queryFn: async ({ pageParam = '1' }) => {
      const response = await getProducts({ page: pageParam });
      return response;
    },
    initialPageParam: '1',
    getNextPageParam: (lastPage) => {
      return lastPage.data.next ? lastPage.data.next : undefined;
    },
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: ['1'],
        }
      : undefined,
  });

  return { products };
};
