import React, { useState, useEffect } from 'react'
import './App.css'
import MethodSelectList from './components/MethodSelectList'
import MethodLogs from './components/MethodLogs'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Execution from './components/Execution'
import Props from './Types/Props'
import method from './Types/method'
import log from './Types/log'
import methodsJson from './components/Method.json'
import logJson from './components/log.json'
import getWeb3 from './Metamask/getWeb3'

const App: React.FC = () => {
  const [selectMethod, setMethod] = useState<string>('')
  const [MethodList, setMethodList] = useState<Array<method>>(methodsJson)
  const [LogList, setLog] = useState<Array<log>>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log('useEffect')
    setMethodList(methodsJson)
    setLog(logJson)
  }, [])

  return (
    <Box m={4} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <MethodSelectList
            selectMethod={selectMethod}
            LogList={LogList}
            MethodList={MethodList}
            setMethod={setMethod}
          ></MethodSelectList>
        </Grid>
        <Grid item>
          <Execution selectMethod={selectMethod} LogList={LogList} MethodList={MethodList} setLog={setLog}></Execution>
        </Grid>
      </Grid>
      <Grid item>
        <MethodLogs selectMethod={selectMethod} MethodList={MethodList} LogList={LogList} setLog={setLog}></MethodLogs>
      </Grid>
    </Box>
  )
}

export default App
