import provider from '../Metamask/provider'

const eth_requestAccounts = async () => {
  if (typeof provider !== 'undefined') {
    console.log('MetaMask is installed!')
  }
  provider.request({ method: 'eth_requestAccounts' })
  const accounts = await provider.request({ method: 'eth_accounts' })
  const account = accounts[0] || 'Not able to get accounts'
  console.log(accounts)
  console.log(account)
}
export default eth_requestAccounts
