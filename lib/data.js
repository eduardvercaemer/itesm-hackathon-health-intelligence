import { Sequelize, DataTypes } from 'sequelize'
import debug from 'debug'
const logger = debug('lib/data')
const sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL, {
    logging: msg => logger(msg),
})

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

