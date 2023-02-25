const appRoot = require('app-root-path')
require('dotenv').config({ path: `${appRoot}/config/.env` })
const { sleep } = require( `${appRoot}/config/utils/lock` )

const connectDB = require(`${appRoot}/config/db/getMongoose`)
const WalletContract = require(`${appRoot}/config/models/WalleetContract`)
const GeneratorFactory = require('./factories/generatorFactory')
