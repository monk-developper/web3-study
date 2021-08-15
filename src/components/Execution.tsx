import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import provider from '../Metamask/MetaMask'
import { makeStyles } from '@material-ui/core/styles'

const Log = async () => {
  if (typeof provider !== 'undefined') {
    console.log('MetaMask is installed!')
  }
  provider.request({ method: 'eth_requestAccounts' })
  const accounts = await provider.request({ method: 'eth_accounts' })
  const account = accounts[0] || 'Not able to get accounts'
  console.log(accounts)
  console.log(account)
}

const useStyles = makeStyles({
  methodButton: {
    margin: '20px',
  },
})

const Execution: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Button onClick={Log} className={classes.methodButton} variant="contained" color="primary">
        execution
      </Button>
    </>
  )
}

export default Execution
