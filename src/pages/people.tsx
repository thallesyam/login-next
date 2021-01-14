import React, { useState } from 'react'
import { NextPageContext } from 'next'
import { redirectGet } from '../utils/redirectGet'
import Link from 'next/link'
import { Container } from '../styles/pages/People'

export default function People({ people }: any): JSX.Element {
  const [auth, setAuthenticated] = useState<boolean>(false)

  if (JSON.stringify(people)) {
    setAuthenticated(true)
  }

  return (
    <>
      <Container>
        {auth && (
          <>
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
          </>
        )}
        {!auth && (
          <>
            <h1>Você não está authenticado e não pode acessar o conteudo</h1>
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
          </>
        )}
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
