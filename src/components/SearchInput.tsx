'use client';

import React, { useEffect, useState } from 'react';
import { useDebounce } from '@/hook/useDebounce';
import { Box, TextField } from '@mui/material';
import { TInitialData } from '@/types';

const SearchInput = ({
  products,
  setFilteredProducts,
}: {
  products: TInitialData;
  setFilteredProducts: React.Dispatch<React.SetStateAction<TInitialData>>;
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebounce(inputValue);

  const handleInputChange = (newInputValue: string) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    const fetchSearchResults = (query: string) => {
      if (query) {
        const filtered = products.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.sku.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    };

    fetchSearchResults(debouncedInputValue);
  }, [debouncedInputValue, products, setFilteredProducts]);

  return (
    <Box className="flex items-center justify-center w-full mb-8">
      <TextField
        id="outlined-basic"
        label="Search products by name or SKU"
        variant="outlined"
        value={inputValue}
        autoComplete="off"
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-full max-w-3xl border-green-600"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#00a63e' },
            '&:hover fieldset': { borderColor: '#026627' },
            '&.Mui-focused fieldset': { borderColor: '#026627' },
          },
        }}
      />
    </Box>
  );
};

export default SearchInput;
