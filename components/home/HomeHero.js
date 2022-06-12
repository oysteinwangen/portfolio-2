import { Container, VStack, Heading, Text, Link } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import NextLink from "next/link";

const HomeHero = () => {
  return (
    <Container maxW="60ch" my={6}>
      <VStack spacing={3}>
        <Heading as="h1" size={["2xl", "3xl", "4xl"]} textAlign="center">
          Portfolio 2
        </Heading>
        <Text
          fontWeight={500}
          fontSize={["lg", "xl", "2xl"]}
          textAlign="center"
        >
          Project documentations
        </Text>
        <Text as="i" textAlign="center">
          by Øystein Wangen
        </Text>
      </VStack>
      <VStack>
        <NextLink href="#projects" passHref>
          <Link
            as={motion.div}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            mt={10}
          >
            <ArrowDownIcon fontSize="4xl" />
          </Link>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default HomeHero;
