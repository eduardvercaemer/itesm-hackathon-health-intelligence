import Head from 'next/head'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Hackathon Web Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hackathon</h1>
      <p>hello, there</p>
      <Button variant="primary">click me</Button>
    </div>
  )
}
