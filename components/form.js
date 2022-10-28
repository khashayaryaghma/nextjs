import Button from './button'
import TextInput from './textField'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    width:"33%",
    margin:"auto"
  }
}));

function Form() {
  const { root } = useStyles();
  const [task, setTask] = useState({text:""});

  function formSubmit(e){
    e.preventDefault();
    createList(list);
  }

  return (
    <form className={root} onSubmit={formSubmit}>
      <TextInput label="Enter your task" onChange={(e)=>{setTask({text:e.target.value})}} value={task.text}/>
      <Button>click me</Button>
    </form>
  )
}

export default Form