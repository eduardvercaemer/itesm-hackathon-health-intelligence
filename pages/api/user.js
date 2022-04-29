import { User, init } from '../../lib/data'

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.redirect('/404')

    await init()
    const data = await User.findAll()
    res.status(200).json({ data })
}

