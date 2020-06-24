import Head from 'next/head';

export function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup Stock Photos</title>
      </Head>

      <div>hello</div>
    </>
  )
}
