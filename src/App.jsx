import React, { useState } from 'react';
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Search from './components/search';
import Header from './components/header';
import ImageGrid from './components/image_grid';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
    },
    styles: {
      global: props => ({
        'html, body': {
          fontSize: 'md',
          bg: '#CBD5E0',
          lineHeight: 'tall',
        },
        a: {
          color: 'teal.500',
        },
      }),
    },
    colors: {
      brand: {
        100: '#f7fafc',
        900: '#1abc9c',
      },
    },
    components: {
      Button: {
        baseStyle: {},
      },
    },
    initialColorMode: 'light',
    useSystemColorMode: false,
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Search setImages={setImages} setLoading={setLoading} />
      <Flex alignItems="center" width="100%">
        {loading ? (
          <Spinner size="xl" m="auto" />
        ) : (
          <ImageGrid images={images} />
        )}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
