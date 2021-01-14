import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import connectToDatabase from '../../utils/mongodb'
import { verify } from 'jsonwebtoken'
import { secret } from '../../utils/secret'

// Toda Rota que for privada usar esse método
const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth!, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res)
    }

    res.status(401).json({ message: 'Sorry you are not authenticated' })
  })
}
export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDatabase()
    const people = await db.collection('login-app').find({}).toArray()
    console.log(req.statusCode)
    res.json(people)
  } catch (error) {
    console.log(error)
    return res.send(500)
  }
})
