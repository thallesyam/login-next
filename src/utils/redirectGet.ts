import { NextPageContext } from 'next'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

interface Json {
  _id: string
  name: string
  email: string
  password: string
}

export async function redirectGet(
  url: string,
  ctx: NextPageContext
): Promise<Json> {
  const cookie = ctx.req?.headers.cookie

  const resp = await fetch(url, {
    headers: {
      cookie: cookie!
    }
  })

  if (resp.status === 401 && !ctx.req) {
    Router.replace('/signin')
  }

  if (resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: 'https://login-next.vercel.app/signin'
    })
    ctx.res?.end()
  }

  const json = await resp.json()
  return json
}
