import React, { useState } from 'react'
import './App.css'
import SelectList from './components/SelectList'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Execution from './components/Execution'

const useStyles = makeStyles({
  methodButton: {
    margin: '20px',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <Box m={4} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <SelectList></SelectList>
        </Grid>
        <Grid item>
          <Execution></Execution>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Box>
  )
}

export default App
