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
        <Headline>Who is Jered?</Headline>
        <Subtitle>From product leader to coach.</Subtitle>
        <SectionTitle>Subsection</SectionTitle>
        <Paragraph>Our understanding of ourselves and the situation is what gives us the ability to take action and produce new results. Many of us plateau or feel stuck when we’ve already taken action on what we know. We’re stuck in the phase illustrated above called Confusion. It takes a while to get out of this place alone. For some, it can take a very long time. But it’s worth pushing through because once you find insight, you enable a new level of performance. And right now, you’re only one realization away.</Paragraph>
        <Paragraph>You’ve probably already asked for help. The first person most people reach out to is a friend or colleague. Maybe someone whose ability you respect. You tell them your situation and they give you their thoughts. If your friends are anything like mine, their advice, while interesting, didn’t lead to lasting change. So you kept looking.</Paragraph>
      </Section>
    </Container>
  );
}

export default About;
