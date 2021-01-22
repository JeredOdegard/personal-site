import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Container from "components/container"
import Navigation from "components/navigation"
import Section from "components/section"
import { Headline, Subtitle, SectionTitle, Paragraph } from "components/typography"
import { Form, Field, FormResponse } from "lib/form"
import styles from "styles/contact.module.scss"

export async function getServerSideProps() {
  return {
    props: {}
  }
}

// export async function getStaticProps() {
//   return {
//     props: {},
//     revalidate: 3,
//   }
// }

export default function Contact() {
  const Contact = Form({
    action: "/api/contact",
    session: useRouter(),
    className: {
      form: styles.contactForm,
      success: styles.success,
      error:styles.error,
      loading: styles.loading,
      submit: styles.submit,
    },
    validate: {
      name: {
        required: true,
      },
      email: {
        required: true,
        validEmail: true,
        // match: {
        //   regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //   message: "Email address must be a valid format.",
        // },
      },
      message: {
        required : true,
      },
    },
  })
  return (
    <Container>
      <Head>
        <title>Contact : Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <Navigation />

      <Section>
        <Headline>Let's talk</Headline>
        <Subtitle>What we can build together?</Subtitle>
        <Paragraph>Complete the form below or send me an email <strong>hello@jeredodegard.com</strong>.</Paragraph>
        <Contact>
          <FormResponse />
          <Field name="name" type="text" label="Full name:" placeholder="John Doe" />
          <Field name="email" type="text" label="Email address:" placeholder="example@example.com" />
          <Field name="message" type="textarea" label="Message:" placeholder="I am reaching out because..." />
          <Field type="submit" value="Send" />
        </Contact>
      </Section>
    </Container>
  )
}