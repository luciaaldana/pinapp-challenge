import Link from 'next/link';
import { Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { IProduct } from '@/types';

const ProductCard = ({ product }: { product: IProduct }) => (
  <Card className="max-w-345 ">
    <CardMedia
      component="img"
      alt="green iguana"
      src={product.image.toString()}
      className="object-contain h-48 w-full"
    />
    <CardContent className="px-2">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          color: 'text.primary',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          overflow: 'hidden',
        }}
      >
        {product.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          marginBottom: '4px',
          fontWeight: 'bold',
        }}
      >
        $ {product.price.toFixed(2)}
      </Typography>
      <Chip label={product.category.name} variant="outlined" className="mb-2" size="small" color="primary" />
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          marginBottom: '4px',
        }}
      >
        {product.brand}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
        }}
      >
        {product.description}
      </Typography>
    </CardContent>
    <CardActions className="px-2">
      <Link
        href="/products/[sku]"
        as={`/products/${product.sku}`}
        className="inline-block px-3 py-1.5 text-sm font-medium text-blue-600 bg-transparent border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        SEE DETAILS
      </Link>
    </CardActions>
  </Card>
);

export default ProductCard;
