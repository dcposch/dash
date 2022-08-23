import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>DC&raquo;s Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Hello world</h1>
      <div className="underline">Testing tailwind</div>
    </main>
  </div>
);

export default Home;
