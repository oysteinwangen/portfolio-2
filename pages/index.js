import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DarkModeSwitch from "../components/DarkModeSwitch";
import ProjectCard from "../components/card/ProjectCard";
import HomeHero from "../components/home/HomeHero";
import { Box, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio 2 | Øystein Wangen</title>
        <meta
          name="description"
          content="Project documentations for 3 of my biggest projects this year"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.main}>
          <DarkModeSwitch />
          <HomeHero />
        </div>
        <Box
          display="flex"
          minH="50vh"
          w="100%"
          py="50"
          mb="100px"
          alignItems="center"
          justifyContent="center"
          id="projects"
          flexDirection="column"
          gap="20"
        >
          <ProjectCard
            title="Javascript Frameworks CA"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            tech={["BOOTSTRAP", "SASS", "Javascript"]}
            imageUrl="https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg"
            imageAlt="Rear view of modern home with pool"
            githubUrl="https://google.com"
          />
          <ProjectCard
            title="Javascript Frameworks CA"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            tech={["BOOTSTRAP", "SASS", "Javascript"]}
            imageUrl="https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg"
            imageAlt="Rear view of modern home with pool"
            githubUrl="https://google.com"
          />
          <ProjectCard
            title="Javascript Frameworks CA"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            tech={["BOOTSTRAP", "SASS", "Javascript"]}
            imageUrl="https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg"
            imageAlt="Rear view of modern home with pool"
            githubUrl="https://google.com"
            websiteUrl="https://arkentype.com"
          />
        </Box>
      </main>

      <footer className={styles.footer}>Copyright - Øystein Wangen</footer>
    </div>
  );
}
