import { User, init } from '../../../lib/data'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.redirect('/404')

    await init()
    const { name } = req.query
    await User.create({ username: name })
    res.status(200).send('created')
}

