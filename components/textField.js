import { TextField } from "@material-ui/core"
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input:{
    width:"23rem"
  }
}));

function TextInput({label}) {
  const [task, setTask] = useState({text:""});
  const { input } = useStyles();

  return (
    <TextField variant="filled" size="small" className={input} label={label} onChange={(e)=>{setTask({text:e.target.value})}} value={task.text}/>
  )
}

export default TextInput