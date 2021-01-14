import React, { useState } from 'react'
import { NextPageContext } from 'next'
import { redirectGet } from '../utils/redirectGet'
import Link from 'next/link'
import { Container } from '../styles/pages/People'

export default function People({ people }: any): JSX.Element {
  const [auth, setAuth] = useState<boolean>()

  if (people.status === 401) {
    setAuth(false)
  } else {
    setAuth(true)
  }

  return (
    <>
      <Container>
        {auth && (
          <>
            <h1>Página Privada</h1>
            <p>Você está authenticado</p>
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
            <h1>Você não tem acesso a essa página</h1>
            <p>Faça um login ou crie uma conta</p>
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
