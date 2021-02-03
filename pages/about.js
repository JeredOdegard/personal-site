import Head from "next/head"
import Link from "next/link"
import Container from "components/container"
import Navigation from "components/navigation"
import Section from "components/section"
import { Headline, Subtitle, SectionTitle, Paragraph } from "components/typography"

function About() {
  return (
    <Container>
      <Head>
        <title>About : Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <Navigation />

      <Section>
        <Headline>About me</Headline>
        <Subtitle>Subtitle</Subtitle>
        <SectionTitle>Subsection</SectionTitle>
        <Paragraph>I am still writing this page. Check back soon for updates. Meanwhile, you can take a look at my resume on LinkedIn <a className="text-purple-700 hover:text-purple-600" href="https://www.linkedin.com/in/jered-odegard/">here</a>.</Paragraph>
      </Section>
    </Container>
  );
}

export default About;
