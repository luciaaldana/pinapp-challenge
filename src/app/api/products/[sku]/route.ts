import { NextResponse } from 'next/server';

const JSON_SERVER_URL = `${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/products`;

export async function GET(request: Request, { params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;

  try {
    if (!sku || sku.trim().length === 0 || sku === 'undefined') {
      return NextResponse.json(
        {
          status: 400,
          message: 'SKU is required',
        },
        { status: 400 }
      );
    }

    const res = await fetch(`${JSON_SERVER_URL}?sku=${sku}`, { cache: 'no-store' });

    if (!res.ok) {
      return NextResponse.json(
        {
          status: res.status,
          message: res.statusText,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      return NextResponse.json(
        {
          status: 404,
          message: `Product with sku ${sku} not found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: 200,
        message: 'Request successful',
        data: data[0],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: 'Internal server error',
        error,
      },
      { status: 500 }
    );
  }
}
