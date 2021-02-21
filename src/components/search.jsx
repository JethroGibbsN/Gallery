import React, { useEffect, useState } from 'react';
import { InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import fetch from 'node-fetch';

const Search = props => {
  const { setLoading, setImages } = props;
  const [search, setSearch] = useState('');
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&per_page=1000&client_id=${process.env.REACT_APP_client_id}`,
      {
        method: 'get',
      }
    )
      .then(res => res.json())
      .then(json => {
        setImages(json.results);
        setLoading(false);
      });
  }, [search]);
  return (
    <Flex justifyContent="center" alignItems="center" my={10}>
      <InputGroup width={['90vw', '50vw']}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
        />
        <Input
          colorScheme="#CBD5E0"
          focusBorderColor="black"
          type="text"
          value={search}
          placeholder="Search Images"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
