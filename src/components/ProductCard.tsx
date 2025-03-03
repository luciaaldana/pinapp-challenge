import Link from 'next/link';
import { Box, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { IProduct } from '@/types';

const ProductCard = ({ product }: { product: IProduct }) => (
  <Box className="max-w-345 border border-gray-300 rounded-xl">
    <CardMedia
      component="img"
      alt="green iguana"
      src={product.image.toString()}
      className="object-contain h-48 w-full rounded-t-xl"
    />
    <CardContent className="px-2">
      <Typography variant="body2" className="text-gray-400">
        {product.brand.toUpperCase()}
      </Typography>
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
          fontSize: '1rem',
          marginBottom: '4px',
        }}
      >
        {product.name}
      </Typography>
      <Typography
        className="text-green-600"
        sx={{
          fontSize: '12px',
          border: '1px solid #00a63e',
          borderRadius: '50px',
          padding: '4px 8px',
          marginBottom: '8px',
          display: 'inline',
        }}
      >
        {product.category.name.toUpperCase()}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          overflow: 'hidden',
          margin: '8px 0',
        }}
      >
        {product.description}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginBottom: '4px',
          fontWeight: 'bold',
          fontSize: '1.25rem',
          color: '#00a63e',
        }}
      >
        $ {product.price.toFixed(2)}
      </Typography>
    </CardContent>
    <CardActions className="px-2">
      <Link
        href="/products/[sku]"
        as={`/products/${product.sku}`}
        className="inline-block px-3 py-1.5 text-sm font-medium bg-green-600 text-grey-600 rounded-2xl w-full border border-transparent text-center hover:bg-green-700 "
      >
        SEE DETAILS
      </Link>
    </CardActions>
  </Box>
);

export default ProductCard;
