const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

export async function getProducts() {
  const res = await fetch(BASE_URL, { cache: 'no-store' });
  const response = await res.json();

  return response;
}

export async function getProductBySku(sku: string) {
  const res = await fetch(`${BASE_URL}/${sku}`, { cache: 'no-store' });
  const response = await res.json();

  return response;
}
