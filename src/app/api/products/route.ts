import { NextResponse } from 'next/server';

const JSON_SERVER_URL = `${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/products`;

export async function GET() {
  try {
    const res = await fetch(JSON_SERVER_URL, { cache: 'no-store' });

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
          message: 'No products found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: 200,
        message: 'Request successful',
        data,
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
