const Migrations = artifacts.require('./Migrations.sol')

module.exports = function (deployer) {
  console.log("헬로");
  deployer.deploy(Migrations)
}
