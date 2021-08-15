import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

 
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
);
 

 
const TaskInput: React.FC = () => {

    const classes = useStyles();
    const [name, setName] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) =>  {
        console.log(event.target.value)
        console.log(event.target.name)
        console.log(name)
    }

    return (
        <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">method</InputLabel>
            <Select
            native
            onChange={handleChange}
            >
            <option aria-label="None" value="" />
            <option value={"10"}>MetaMask接続</option>
            {/* <option >Twenty</option> */}
            {/* <option >Thirty</option> */}
            </Select>

        </FormControl>
        </div>
    )
}
 
export default TaskInput