import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Modal, PoolCard } from "../components";
import { useRouter } from "next/router";

import { hasCookie, setCookie } from "cookies-next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I-Deal</title>
      </Head>
      <main className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 py-8  justify-items-center h-fit">
        <div className="md:col-span-2"></div>
      </main>
    </>
  );
};

export default Home;
