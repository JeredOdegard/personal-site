import Head from "next/head"

import NavBar from "components/navbar.js"
import { Headline, Subtitle, SectionTitle } from "components/typography.js"

function Blog() {
  return (
    <div className="min-w-sm antialiased">
    
      <Head>
        <title>Blog - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">
        <Headline>Blog</Headline>
      </main>
    </div>
  );
}

export default Blog;
