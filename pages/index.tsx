import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { getMainPage } from "../lib/api/mainPage";

type HomeProps = {
  title: string;
};

const Home: NextPage<HomeProps> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>SKINIA/2023</title>
        <meta name="description" content="The main page of Skinia 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold underline"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const title = await getMainPage();

  return {
    props: {
      title,
    },
  };
};

export default Home;
