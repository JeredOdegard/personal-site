import Head from "next/head"

import NavBar from "@/components/navbar.js"
import { Headline, Subtitle, SectionTitle } from "@/components/typography.js"

function About() {
  return (
    <div className="min-w-sm antialiased">
      <Head>
        <title>About - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">
        <Headline>About</Headline>
        <Subtitle>Learn about me</Subtitle>
      </main>
    </div>
  );
}

export default About;
