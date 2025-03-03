'use client';
import ProductList from '@/components/ProductList';
import { getProducts } from '@/services/productService';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts({ page: '1' })
      .then(setProducts)
      .catch(() => setError('Error al cargar los productos'));
  }, []);

  return (
    <Container>
      <Typography gutterBottom variant="h2" sx={{ margin: '16px' }} className="text-center">
        PinApp Challenge
      </Typography>
      {error ? <Typography color="error">{error}</Typography> : <ProductList initialData={products} />}
    </Container>
  );
}
