import Head from "next/head";
import styles from "../styles/Home.module.css";
import DarkModeSwitch from "../components/DarkModeSwitch";
import ProjectCard from "../components/card/ProjectCard";
import HomeHero from "../components/home/HomeHero";
import Contact from "../components/home/Contact";
import { Box } from "@chakra-ui/react";

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
            description="An ecommerce website with product grids, search, detail pages, cart functionality, login and editing capabilities."
            tech={["Javascript", "SASS", "Rest API", "HTML"]}
            imageUrl="./assets/MusicPortScreenshot.png"
            imageAlt="A screenshot of Music Port's homepage"
            githubUrl="https://github.com/oysteinwangen/oystein-wangen-semester-project-2"
            websiteUrl="https://wangen-sp2.netlify.app/"
          />
          <ProjectCard
            title="JS Frameworks CA"
            description="JS Frameworks CA is a specific feature project utilising several different technologies based around the React framework. It's based on API requests, a simple UI, and basic form and authentication functions that can be ported to all kinds of projects."
            tech={["Next.js", "Tailwind CSS", "Rest API", "Formik", "Yup"]}
            imageUrl="./assets/JSFrameworksCAScreenshot.png"
            imageAlt="A screenshot of the homepage"
            githubUrl="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-oysteinwangen"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          minH="30vh"
        >
          <Contact />
        </Box>
      </main>

      <footer className={styles.footer}>Copyright - Øystein Wangen</footer>
    </div>
  );
}
