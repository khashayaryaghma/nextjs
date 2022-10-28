import { makeStyles } from '@material-ui/core/styles';
import Buttoon from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root:{
        
    }
  }));

function Button({children}) {
    const {button} = useStyles();
  return (
    <Buttoon variant="contained" size="large" className={button}>{children}</Buttoon>
  )
}

export default Button;