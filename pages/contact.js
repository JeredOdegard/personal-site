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
        <Subtitle>What we can build together?</Subtitle>
        <Paragraph>Because this page is not yet finished, please email <strong>hello@jeredodegard.com</strong> to start a conversation.</Paragraph>
      </Section>
    </Container>
  )
}