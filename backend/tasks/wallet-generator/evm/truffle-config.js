const appRoot = require('app-root-path')
const chains = require('./chains/get')

module.exports = {
    contracts_build_directory: `${appRoot}/contracts/abis`,
    networks: chains,
    compiler: {
        solc: {
            version: '0.8.17',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
}