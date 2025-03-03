'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hook/useDebounce';
import {
  Autocomplete,
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { TInitialData } from '@/types';

const SearchInput = ({
  products,
  setFilteredProducts,
}: {
  products: TInitialData;
  setFilteredProducts: React.Dispatch<React.SetStateAction<TInitialData>>;
}) => {
  const [filteredBy, setFilteredBy] = useState<'name' | 'sku'>('name');
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebounce(inputValue);
  const router = useRouter();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredBy(event.target.value as 'name' | 'sku');
  };

  const handleInputOnChange = (event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
    if (newValue) {
      const productSelected = products.find((product) => product[filteredBy] === newValue);

      if (productSelected) {
        router.push(`/products/${productSelected.sku}`);
      }
    }
  };

  const handleInputChange = (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    const fetchSearchResults = (query: string) => {
      if (query) {
        const filteredProducts = products.filter((product) => {
          const value = product[filteredBy]?.toString().toLowerCase() || '';
          return value.includes(query.toLowerCase());
        });
        setFilteredProducts(filteredProducts);
      } else {
        setFilteredProducts(products);
      }
    };

    fetchSearchResults(debouncedInputValue);
  }, [debouncedInputValue, filteredBy, products, setFilteredProducts]);

  return (
    <Container className="flex flex-row justify-between items-center">
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          marginBottom: 2,
        }}
        className="flex flex-row justify-between items-center"
      >
        <Typography className="text-blue-500">Filter by:</Typography>
        <RadioGroup
          aria-labelledby="filter-radio-group"
          name="filter-radio-group"
          value={filteredBy}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" className="text-blue-500" />
          <FormControlLabel value="sku" control={<Radio />} label="SKU" className="text-blue-500" />
        </RadioGroup>
      </Box>
      <Autocomplete
        disablePortal
        clearOnBlur={false}
        options={products.map((product) => product[filteredBy]?.toString())}
        className="flex-1"
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleInputOnChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="filled-basic"
            variant="filled"
            label={`Search Product by ${filteredBy}`}
            color="primary"
          />
        )}
      />
    </Container>
  );
};

export default SearchInput;
