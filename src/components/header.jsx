import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Fonts from './Fonts';

const Header = () => {
  return (
    <>
      <Fonts />
      <Flex justifyContent="flex-start" p={4}>
        <Heading
          size="2xl"
          fontFamily="Allan"
          cursor="pointer"
          textShadow="3px 1px gray"
        >
          GALLERY
        </Heading>
      </Flex>
    </>
  );
};

export default Header;
