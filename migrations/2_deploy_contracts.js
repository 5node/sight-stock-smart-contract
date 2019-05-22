const AdditionGame = artifacts.require('./AdditionGame.sol')
const fs = require('fs')

module.exports = function (deployer) {

    deployer.deploy(AdditionGame)
        .then(() => {
            // Record recently deployed contract address to 'deployedAddress' file.
            if (AdditionGame._json) {
                // Save abi file to deployedABI.
                fs.writeFile(
                    'deployedABI',
                    JSON.stringify(AdditionGame._json.abi, 2),
                    (err) => {
                        if (err) throw err
                        console.log("파일에 ABI 입력 성공")
                    })
            }

            fs.writeFile(
                'deployedAddress',
                AdditionGame.address,
                (err) => {
                    if (err) throw err
                    console.log("파일에 주소 입력 성공")
                })
        })
}
