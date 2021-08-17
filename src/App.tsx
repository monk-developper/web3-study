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
  const [selectId, setSelectId] = useState<number>(0)
  const [MethodList, setMethodList] = useState<Array<method>>([])
  const [MethodLog, setMthodLog] = useState<Array<log>>([])
  useEffect(() => {
    setMethodList(methodsJson)
  })
  return (
    <Box m={4} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <MethodSelectList
            selectid={selectId}
            MethodLog={MethodLog}
            MethodList={MethodList}
            setSelectId={setSelectId}
          ></MethodSelectList>
        </Grid>
        <Grid item>
          <Execution></Execution>
        </Grid>
      </Grid>
      <Grid item>
        <MethodLogs></MethodLogs>
      </Grid>
    </Box>
  )
}

export default App
