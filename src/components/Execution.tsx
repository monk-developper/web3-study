import React, { useState, useReducer } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Props from '../Types/Props'
import MethodType from '../Types/method'
import logType from '../Types/log'
import eth_requestAccounts from '../Metamask/eth_requestAccounts'
import HelloContract from '../Metamask/HelloContract'

const useStyles = makeStyles({
  methodButton: {
    margin: '20px',
  },
})

const Execution: React.FC<Props> = ({ selectMethod, MethodList, LogList, setLog }) => {
  const classes = useStyles()
  console.log('Execution:LogList', LogList)

  const runMethod = async (selectMethod: string | boolean | undefined, useMethod: MethodType) => {
    if (!selectMethod) return false

    let initlog: logType = {
      host: useMethod.host,
      method: useMethod.method,
      library: useMethod.library,
    }
    let responseLog: logType

    switch (selectMethod) {
      case 'eth_requestAccounts':
        responseLog = await eth_requestAccounts()
        break
      case 'memoryChange':
        responseLog = await HelloContract()
        break
      default:
        responseLog = {
          library: 'none method',
        }
    }
    initlog = { ...initlog, ...responseLog }
    LogList.unshift(initlog)
    setLog([...LogList])
  }

  const useMethod = MethodList.filter((value) => value.method === selectMethod)[0]

  return (
    <>
      <Button
        onClick={() => runMethod(selectMethod, useMethod)}
        className={classes.methodButton}
        variant="contained"
        color="primary"
      >
        execution
      </Button>
    </>
  )
}

export default Execution
