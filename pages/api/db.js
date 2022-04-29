import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL)

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    }
})

export default async function handler(req, res) {
    await sequelize.sync()
    try {
        await User.create({ username: 'ed' })
    } catch (_) {}
    const data = await User.findAll() 
    res.status(200).json({ data })
}

