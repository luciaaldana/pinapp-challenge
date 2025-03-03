import { getProductBySku } from '@/services/productService';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;

  const { data } = await getProductBySku(sku);

  if (!data) {
    return (
      <Stack className="m-8 gap-8 max-w-5xl mx-auto justify-center items-center">
        <Box className="w-full justify-center flex max-w-3xs flex-col ">
          <Typography variant="body2" className="text-gray-900">
            Product not found for sku:
          </Typography>
          <Typography variant="h5" className="text-gray-900">
            {sku}
          </Typography>
          <Link
            href="/"
            as="/"
            className=" px-3 py-1.5 text-sm font-medium bg-green-600 text-grey-600 rounded-2xl border border-transparent text-center hover:bg-green-700  mt-8"
          >
            BACK
          </Link>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack direction="row" className="m-8 gap-8 max-w-5xl mx-auto">
      <Box className="w-full justify-center flex max-w-3xs">
        <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={200}
          className="object-cover h-48 w-full hidden sm:block rounded-lg"
        />
      </Box>
      <Stack className="gap-4">
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
          <Typography className="text-gray-400 flex-1">{data.brand}</Typography>
          <Typography className="text-gray-400">SKU:{data.sku}</Typography>
        </Stack>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: 'text.primary',
            fontSize: '1.5rem',
            marginBottom: '4px',
            fontWeight: 'bold',
          }}
        >
          {data.name}
        </Typography>
        <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={200}
          className="object-cover h-48 w-full rounded-lg sm:hidden"
        />
        <Divider />
        <Stack>
          <Typography variant="body2" className="text-gray-400">
            Precio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: '#00a63e',
            }}
          >
            $ {data.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" className="text-gray-900">
            {!!data.stock
              ? data.stock > 10
                ? '+10 unidades disponibles'
                : `${data.stock} unidades disponibles`
              : 'Sin Stock'}
          </Typography>
        </Stack>
        <Typography variant="body2" className="text-gray-400">
          {data.description}
        </Typography>
        <Divider />
        <Typography variant="body2" className="text-gray-900">
          Vendido por {data.brand}
        </Typography>
      </Stack>
    </Stack>
  );
}
