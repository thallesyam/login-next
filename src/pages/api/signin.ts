import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/mongodb'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { secret } from '../../utils/secret'
import cookie from 'cookie'

export default async function Login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { db } = await connectToDatabase()
    const { method } = req
    const { email } = req.body

    if (method === 'POST') {
      const person = await db.collection('login-app').findOne({ email })

      if (person === null) {
        res.status(401).json({ message: 'Email is not exist' })
      } else {
        compare(
          req.body.password,
          person.password,
          (err: Error, results: boolean): void => {
            if (!err && results) {
              const claims = { sub: person._id }
              const jwt = sign(claims, secret, {
                expiresIn: '1h'
              })
              res.setHeader(
                'Set-Cookie',
                cookie.serialize('auth', jwt, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== 'development',
                  sameSite: 'strict',
                  maxAge: 3600,
                  path: '/'
                })
              )
              res.json({ message: 'Welcome back to app' })
            } else {
              res.status(403).json({ message: 'Password is not right' })
            }
          }
        )
      }
    } else {
      return res.status(405).json({ message: 'We only support post' })
    }
  } catch (error) {
    console.log(error)
    return res.send(500)
  }
}
