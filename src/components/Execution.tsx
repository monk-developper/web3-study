import React, { useState, useReducer } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Props from '../Types/Props'
import MethodType from '../Types/method'
import { BackdropProps } from '@material-ui/core'
import eth_requestAccounts from '../Metamask/eth_requestAccounts'

const useStyles = makeStyles({
  methodButton: {
    margin: '20px',
  },
})

const runMethod = async (selectMethod: string | boolean | undefined) => {
  if (!selectMethod) return false
  console.log('runMethod')

  switch (selectMethod) {
    case 'eth_requestAccounts':
      eth_requestAccounts()
      break
  }
}

const Execution: React.FC<Props> = ({ selectMethod, MethodList }) => {
  const classes = useStyles()

  console.log('Execution')
  console.log('selectMethod', selectMethod)
  console.log('MethodList', MethodList)

  const filterList = MethodList.filter((value) => value.method === selectMethod)
  const useMethod: boolean | MethodType = filterList.length > 0 ? filterList[0] : false

  return (
    <>
      <Button
        onClick={() => runMethod(selectMethod)}
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
