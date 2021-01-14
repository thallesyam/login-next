import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import connectToDatabase from '../../utils/mongodb'
import { verify } from 'jsonwebtoken'
import { secret } from '../../utils/secret'

// Toda Rota que for privada usar esse método
const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res)
    }

    res.status(500).json({ message: 'Sorry you are not authenticated' })
  })
}
export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDatabase()
    const people = await db.collection('login-app').find({}).toArray()
    res.json(people)
  } catch (error) {
    console.log(error)
    return res.send(500)
  }
})
