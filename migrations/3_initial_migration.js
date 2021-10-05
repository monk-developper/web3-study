// const { default: Web3 } = require('web3')

const TokenA = artifacts.require('TokenA')
const Router = artifacts.require('Router')

const toWei = (Number) => web3.utils.toWei(web3.utils.toBN(Number), 'ether')

module.exports = async function (deployer) {
  await deployer.deploy(TokenA, 'TokenA', 'TokenA', toWei(10 ** 10))
  const tA = await TokenA.deployed()

  await deployer.deploy(Router, [tA.address])
  const router = await Router.deployed()

  await tA.transfer(router.address, toWei(10 ** 10))
}
