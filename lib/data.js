import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL)

export const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    }
})

export const sync = sequelize.sync.bind(sequelize)

let _ready = false
export const init = async () => {
    if (_ready) return
    await sync()
    _ready = true
}

