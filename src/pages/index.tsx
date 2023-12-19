import React from 'react';

import Head from 'next/head';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/modules/dashboard'));

export default function Home() {
  return (
    <>
      <Head>
        <title>TyrAds</title>
        <meta
          name='description'
          content='Created with Next.js'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Dashboard />
    </>
  );
}
