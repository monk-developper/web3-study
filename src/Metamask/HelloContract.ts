import provider from './provider'
import { abi, networks } from '../contracts/Hello.json'
import Web3 from 'web3'
import logType from '../Types/log'
import { AbiItem } from 'web3-utils'

const HelloContract = async () => {
  const responseLog: logType = {
    log: '',
    nextMethod: 'none',
    status: 'error',
  }

  if (typeof provider !== 'undefined') {
    console.log('MetaMask is installed!')
  }

  const web3 = new Web3(provider)
  const accounts = await web3.eth.getAccounts()
  const account = accounts[0]

  const networkId = await web3.eth.net.getId()
  const numberId: string = networkId.toString()
  let id = numberId as keyof typeof networks
  const deployedNetwork = networks[id]
  const contractInstance = new web3.eth.Contract(abi as AbiItem[], deployedNetwork && deployedNetwork.address)
  const result = await contractInstance.methods.message().call()

  responseLog.log = result

  console.log('result', result)

  return responseLog
}

export default HelloContract
