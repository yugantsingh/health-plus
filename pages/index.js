import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Health+</title>
        <meta
          name="description"
          content="All India Health and Hygiene System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Health Plus</h1>
    </div>
  );
}
