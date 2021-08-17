import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Props from '../Types/Props'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)

const MethodSelectList: React.FC<Props> = ({ selectid, MethodList, setSelectId }) => {
  const classes = useStyles()

  // const selectMethod = MethodList.filter((method) => method.id === selectid)
  // console.log('selectMethod', selectMethod)

  const selectOnChange = (event: any) => {
    console.log(selectid)
    console.log(setSelectId)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Method</InputLabel>
        <Select native onChange={selectOnChange}>
          <option></option>
          {MethodList.map((method, index) => {
            return (
              <option key={index} value={method.id}>
                {method.host + '/' + method.method}
              </option>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
export default MethodSelectList
