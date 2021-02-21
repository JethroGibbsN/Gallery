import React from 'react';
import {
  Flex,
  Box,
  Modal,
  LinkOverlay,
  Button,
  Avatar,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Heading,
} from '@chakra-ui/react';
import ReactRoundedImage from 'react-rounded-image';
import { FcLike } from 'react-icons/fc';
import Fonts from './Fonts';

const ImageGrid = ({ images }) => {
  return (
    <>
      <Fonts />
      <Flex
        flexWrap="wrap"
        mx="auto"
        width="90vw"
        flexDirection={['column', 'row']}
        justifyContent="center"
      >
        {images.length === 0 ? (
          <Heading
            size="xl"
            fontFamily="Allan"
            cursor="pointer"
            textShadow="gray"
            my="10vh"
          >
            Search for an image to get started
          </Heading>
        ) : (
          images.map((e, i) => {
            return <Frame obj={e} url={e.urls.small} key={i} />;
          })
        )}
      </Flex>
    </>
  );
};

const Frame = ({ obj, url }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        rounded="md"
        bgColor="gray.100"
        width={['90vw', '20vw']}
        my="1vh"
        mx={['auto', '1vw']}
      >
        <Image
          onClick={onOpen}
          src={url}
          width="400px"
          height="35vh"
          p={3}
          objectFit="cover"
          overflowY="hidden"
          cursor="pointer"
        />
        <Flex p={3} justifyContent="space-between" alignItems="center">
          <Heading size="sm">{obj.user.username}</Heading>
          <Flex alignItems="center">
            <FcLike size={'22px'} /> <>&nbsp;</>
            <Heading size="sm">{obj.likes} Likes</Heading>
          </Flex>
        </Flex>
      </Box>

      <Modal onClose={onClose} size={'xl'} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FlexImage obj={obj} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={url} alt="Segun Adebayo" mx="auto" />
            <Text my="1vh" fontWeight="bold">
              # {obj.alt_description}{' '}
            </Text>
            <Text mx="auto" fontWeight="semibold">
              {obj.description}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Flex>
              <FcLike size={'25px'} /> <>&nbsp;</>
              <Text fontSize="18px" fontWeight="semibold">
                {obj.likes} Likes
              </Text>
            </Flex>

            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const FlexImage = ({ obj }) => {
  return (
    <Flex alignItems="center">
      {obj.user.profile_image.medium === '' ? (
        <Avatar src="https://bit.ly/broken-link" />
      ) : (
        <ReactRoundedImage
          image={obj.user.profile_image.medium}
          roundedSize="0"
          imageWidth="50"
          imageHeight="50"
        />
      )}
      <>&nbsp;&nbsp;</>
      <LinkOverlay
        fontSize="18px"
        fontWeight="semibold"
        href={obj.user.links.html}
        cursor="pointer"
      >
        {obj.user.name} #{obj.user.username}
      </LinkOverlay>
    </Flex>
  );
};

export default ImageGrid;
