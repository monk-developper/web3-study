import provider from './provider'
import { abi, networks } from '../contracts/Hello.json'
import Web3 from 'web3'
import logType from '../Types/log'
import { AbiItem } from 'web3-utils'

const HelloContractUpdate = async (value: string | undefined) => {
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

  try {
    let option = {
      from: account,
      gasPrice: '20000000000', // このトランザクションで支払う1ガス当たりの価格。単位は wei。
      gas: '41000', // ガスリミット。このトランザクションで消費するガスの最大量。
    }
    await contractInstance.methods.update(value).send(option)
    responseLog.log = value
    console.log('value', value)
  } catch (err) {
    console.log(err)
  }

  return responseLog
}

export default HelloContractUpdate
