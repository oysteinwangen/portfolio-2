import { Container, VStack, Heading, Text, Link } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import NextLink from "next/link";

const Contact = () => {
  return (
    <Container maxW="60ch" my={6}>
      <VStack spacing={3}>
        <Text
          fontWeight={700}
          fontSize={["xl", "2xl", "4xl"]}
          textAlign="center"
        >
          Contact me
        </Text>
        <NextLink href="#projects" passHref>
          <Link>hello@wangen.digital</Link>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default Contact;
