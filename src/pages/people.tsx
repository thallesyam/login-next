import React from 'react'
import { NextPageContext } from 'next'
import { redirectGet } from '../utils/redirectGet'

export default function People({ people }: any): JSX.Element {
  return (
    <>
      <h1>Hello people {JSON.stringify(people)}</h1>
    </>
  )
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const json = await redirectGet('http://localhost:3000/api/people', ctx)
  return { people: json }
}
