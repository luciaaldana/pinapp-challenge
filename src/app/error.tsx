'use client';
import Link from 'next/link';
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const error = () => {
  return (
    <Stack className="m-8 gap-8 max-w-5xl mx-auto justify-center items-center">
      <Box className="w-full justify-center flex max-w-3xs flex-col ">
        <Typography variant="h5" className="text-gray-900 text-center">
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body2" className="text-gray-900 text-center">
          An error occurred while loading the page
        </Typography>

        <Link
          href="/"
          as="/"
          className=" px-3 py-1.5 text-sm font-medium bg-green-600 text-grey-600 rounded-2xl border border-transparent text-center hover:bg-green-700  mt-8"
        >
          TRY AGAIN
        </Link>
      </Box>
    </Stack>
  );
};

export default error;
