import {
  Flex,
  Box,
  Image,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Icon,
  ScaleFade,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
import NextLink from "next/link";

const ProjectCard = (props) => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );
  console.log(inViewport);

  /* const project = {
    imageUrl:
      "https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg",
    imageAlt: "Rear view of modern home with pool",
    tech: ["BOOTSTRAP", "SASS", "Javascript"],
    title: "Javascript Frameworks CA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }; */

  const techStackJoined = props.tech.join(" • ");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ScaleFade initialScale={0.9} in={inViewport}>
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        w="100%"
        maxW="1000px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        ref={ref}
      >
        <Box pos="relative" w={["100%", "100%", "40%"]}>
          <Button
            pos="absolute"
            colorScheme="grey"
            variant="solid"
            top="2"
            right="2"
            onClick={onOpen}
          >
            <SearchIcon />
          </Button>
          <Image
            h={["auto", "auto", "100%"]}
            w={["100%", "100%", "auto"]}
            maxH={["200px", "200px", "100%"]}
            objectFit="cover"
            src={props.imageUrl}
            alt={props.imageAlt}
            onClick={onOpen}
            cursor="pointer"
          />

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="20px" />
            <ModalContent
              maxW="fit-content"
              maxH="fit-content"
              borderRadius="lg"
              overflow="hidden"
            >
              <ModalCloseButton color="black" />

              <Image
                objectFit="contain"
                maxH="90vh"
                maxW="90vw"
                src={props.imageUrl}
              />
            </ModalContent>
          </Modal>
        </Box>

        <Flex
          p="6"
          w={["100%", "100%", "60%"]}
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {techStackJoined}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h3"
            fontSize={["lg", "xl", "2xl"]}
            lineHeight="tight"
          >
            {props.title}
          </Box>

          <Box fontSize="md" lineHeight="short">
            {props.description}
          </Box>
          <Stack mt="10" direction={["column", "row", "row"]} spacing={4}>
            <NextLink href={props.githubUrl} passHref>
              <Button leftIcon={<Icon as={AiFillGithub} />}>Github</Button>
            </NextLink>
            {props.websiteUrl ? (
              <NextLink href={props.websiteUrl} passHref>
                <Button leftIcon={<Icon as={AiOutlineLink} />}>
                  Live website
                </Button>
              </NextLink>
            ) : (
              <Box></Box>
            )}
          </Stack>
        </Flex>
      </Box>
    </ScaleFade>
  );
};

export default ProjectCard;
