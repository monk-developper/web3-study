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

const App: React.FC = () => {
  const t = methodsJson

  const [selectMethod, setMethod] = useState<string>('')
  const [MethodList, setMethodList] = useState<Array<method>>(t)
  const [MethodLog, setMthodLog] = useState<Array<log>>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMethodList(methodsJson)
  })

  return (
    <Box m={4} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <MethodSelectList
            selectMethod={selectMethod}
            MethodList={MethodList}
            setMethod={setMethod}
          ></MethodSelectList>
        </Grid>
        <Grid item>
          <Execution selectMethod={selectMethod} MethodList={MethodList}></Execution>
        </Grid>
      </Grid>
      <Grid item>
        <MethodLogs></MethodLogs>
      </Grid>
    </Box>
  )
}

export default App
