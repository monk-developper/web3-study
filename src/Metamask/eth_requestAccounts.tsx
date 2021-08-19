import provider from '../Metamask/provider'
import logType from '../Types/log'

const eth_requestAccounts = async () => {
  const responseLog: logType = {
    log: '',
    nextMethod: 'none',
    status: 'error',
  }

  if (typeof provider !== 'undefined') {
    console.log('MetaMask is installed!')
  }
  provider.request({ method: 'eth_requestAccounts' })
  const accounts = await provider.request({ method: 'eth_accounts' })
  const account = accounts[0] || false
  if (!account) {
    responseLog.log = 'But errorMetaMask is installed'
    return responseLog
  } else {
    responseLog.log = 'MetaMask is installed'
    console.log('eth_requestAccounts is success', account)
    responseLog.status = 'success'
    return responseLog
  }
}
export default eth_requestAccounts
