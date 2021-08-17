import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(host: string, method: string, library: string, log: string, nextMethod: string, status: string) {
  return { host, method, library, log, nextMethod, status }
}

const rows = [createData('HOST名', 'メソッド名', 'ライブラリー', 'LOG', '次のメソッド', 'ステータス')]

const MethodLogs: React.FC = () => {
  const classes = useStyles()
  console.log('rows', rows)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Host</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Library</TableCell>
            <TableCell align="right">Log</TableCell>
            <TableCell align="right">NextMethod</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.host}>
              <TableCell align="right">{row.host}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">{row.library}</TableCell>
              <TableCell align="right">{row.log}</TableCell>
              <TableCell align="right">{row.nextMethod}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default MethodLogs
