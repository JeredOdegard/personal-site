import Head from "next/head"
import Link from "next/link"
import Container from "components/container"
import Navigation from "components/navigation"
import Section from "components/section"
import { Headline, Subtitle, SectionTitle, Paragraph } from "components/typography"

export default function Contact() {
  return (
    <Container>
      <Head>
        <title>About - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navigation />

      <Section>
        <Headline>Let's talk</Headline>
        <Subtitle>I would love to connect.</Subtitle>
        <Paragraph>This page is still being built (by me). Please email <strong>hello@jeredodegard.com</strong> if you want to reach me.</Paragraph>
      </Section>
    </Container>
  )
}