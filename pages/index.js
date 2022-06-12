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
            title="Semester Project 2"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            tech={["Javascript", "SASS", "Rest API", "HTML"]}
            imageUrl="./assets/MusicPortScreenshot.png"
            imageAlt="A screenshot of Music Port's homepage"
            githubUrl="https://github.com/oysteinwangen/oystein-wangen-semester-project-2"
            websiteUrl="https://wangen-sp2.netlify.app/"
          />
        </Box>
      </main>

      <footer className={styles.footer}>Copyright - Øystein Wangen</footer>
    </div>
  );
}
