import Head from "next/head"

import NavBar from "../components/navbar"

function Blog() {
  return (
    <div className="min-w-sm antialiased">
    
      <Head>
        <title>Blog - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-black mb-8 mt-12 leading-tight text-gray-900">Blog</h1>
      </main>
    </div>
  );
}

export default Blog;
