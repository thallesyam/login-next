import React from 'react'
import Link from 'next/link'
import { Container } from '../styles/pages/Home'

export default function Home(): JSX.Element {
  return (
    <>
      <Container>
        <h1>
          Bem vindo ao sistema de Login <br /> Next JS
        </h1>
        <p>Para acessar faça o Login ou crie uma conta</p>
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
        <br />
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
        <br />
      </Container>
    </>
  )
}
