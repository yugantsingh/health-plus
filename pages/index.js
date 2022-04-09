import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Health+</title>
        <meta name="description" content="Health+ - Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <p>Here goes the descriptioon about this project in brief</p>
    </div>
  );
}
