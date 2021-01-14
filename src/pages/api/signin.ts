import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/mongodb'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { secret } from '../../utils/secret'

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

      compare(
        req.body.password,
        person.password,
        (err: Error, results: boolean): void => {
          if (!err && results) {
            const claims = { sub: person._id }
            const jwt = sign(claims, secret, {
              expiresIn: '1h'
            })
            res.json({ authToken: jwt })
          } else {
            res.json({ message: 'Something went wrong!' })
          }
        }
      )
    } else {
      return res.status(405).json({ message: 'We only support post' })
    }
  } catch (error) {
    console.log(error)
    return res.send(500)
  }
}
