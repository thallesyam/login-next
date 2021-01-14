import React from 'react'
import { NextPageContext } from 'next'
import { redirectGet } from '../utils/redirectGet'
import Link from 'next/link'
import { Container } from '../styles/pages/People'

export default function People({ people }: any): JSX.Element {
  console.log(JSON.stringify(people))
  return (
    <>
      <Container>
        <h1>Página Privada</h1>
        <p>Você está autenticado</p>
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
        <br />
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
        <br />
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
      </Container>
    </>
  )
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const json = await redirectGet(
    'https://login-next.vercel.app/api/people',
    ctx
  )
  return { people: json }
}
