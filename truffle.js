// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GAS_LIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0x31f5b2f43dc7e76282079eae77fe5936933bfac9126ccb1b96916b3253c75afc'

module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GAS_LIMIT,
            gasPrice: null,
        },
    },
    compilers: {
        solc: {
            version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
        }
    }

}