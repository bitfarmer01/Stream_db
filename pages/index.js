import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import requests from "../utils/requests";
export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>MovieDB</title>
        <link rel="icon" href="/Popcorn.svg/" />
      </Head>
      <Header />
      <NavBar />
      <HeroSection results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
