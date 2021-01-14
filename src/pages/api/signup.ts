import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/mongodb'
import { hash } from 'bcrypt'

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { db } = await connectToDatabase()
    const { method } = req

    if (method === 'POST') {
      hash(req.body.password, 10, async function (err, hash) {
        if (!err && hash) {
          const { name, email } = req.body

          const data = {
            name,
            email,
            password: hash
          }

          db.collection('login-app').insertOne(data)

          const persons = await db.collection('login-app').find({}).toArray()
          return res.json(persons)
        }
      })
    } else {
      return res.status(405).json({ message: 'We only support post' })
    }
  } catch (error) {
    console.log('Ops Not found Database')
    return res.send(500)
  }
}
