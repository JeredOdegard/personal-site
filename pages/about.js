import Link from "next/link";

function About() {
  return (
    <>
      <h1>About page</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}

export default About;
