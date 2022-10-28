import { TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    width:"23rem"
  }
}));

function TextInput({label ,onChange, value}) {
  const { root } = useStyles();

  return (
    <TextField variant="filled" size="small" className={root} label={label} onChange={onChange} value={value}/>
  )
}

export default TextInput