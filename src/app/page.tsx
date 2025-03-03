import { Container, Typography } from '@mui/material';
import { getProducts } from '@/services/productService';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const initialData = await getProducts({ page: '1' });

  return (
    <Container>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ color: 'text.primary', margin: '16px' }}
        className="text-center"
      >
        PinApp Challenge
      </Typography>
      <ProductList initialData={initialData} />
    </Container>
  );
}
