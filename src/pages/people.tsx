import React from 'react'
import { NextPageContext } from 'next'
import { redirectGet } from '../utils/redirectGet'
import Link from 'next/link'

export default function People({ people }: any): JSX.Element {
  return (
    <>
      <h1>Hello people {JSON.stringify(people)}</h1>

      <br />
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
      <br />
      <Link href="/signup">
        <a>Sign in</a>
      </Link>
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
    </>
  )
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const json = await redirectGet('http://localhost:3000/api/people', ctx)
  return { people: json }
}
