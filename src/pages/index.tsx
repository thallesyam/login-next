import React from 'react'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <>
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
      <br />
      <Link href="/signup">
        <a>Sign in</a>
        <br />
      </Link>
      <Link href="/people">
        <a>People</a>
        <br />
      </Link>
    </>
  )
}
