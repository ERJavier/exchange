const GeneratorFactory = require('./GeneratorFactoryContract')
const contract = require('@truffle/contract')

module.exports = async (provider) => {
    const factory = contract(GeneratorFactory)
    factory.setProvider(provider)
    var instance = await factory.deployed()
    return instance
}