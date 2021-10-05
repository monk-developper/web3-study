import provider from './provider'
// import { abi, networks } from '../contracts/Router.json'
// import { abi, networks } from '../contracts/ERC20.json'
import { abi, networks } from '../contracts/TokenA.json'
import Web3 from 'web3'
import logType from '../Types/log'
import { AbiItem } from 'web3-utils'

const TokenAGetBlance = async () => {
  const responseLog: logType = {
    log: '',
    nextMethod: 'none',
    status: 'error',
  }

  if (typeof provider !== 'undefined') {
    console.log('MetaMask is installed!')
  } else {
    responseLog.log = 'can not connect to MetaMask'
    return responseLog
  }
  const web3 = new Web3(provider)
  const accounts = await web3.eth.getAccounts()
  const account = accounts[0]

  const networkId = await web3.eth.net.getId()
  const numberId: string = networkId.toString()
  let id = numberId as keyof typeof networks
  const deployedNetwork = networks[id]
  console.log(typeof networks)
  const contractInstance = new web3.eth.Contract(abi as AbiItem[], deployedNetwork && deployedNetwork.address)

  const accountBlance = await web3.eth.getBalance(account)
  const tokenBlance = await contractInstance.methods.balances(account).call()
  const etherValue = Web3.utils.fromWei(tokenBlance, 'ether')
  responseLog.log = etherValue
  responseLog.status = 'Success'

  return responseLog
}

export default TokenAGetBlance
