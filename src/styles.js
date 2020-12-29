import { makeStyles } from '@material-ui/core/styles';
import { navBarWidth } from './constants/constants'

export default makeStyles((theme) => ({
    main: {
        marginLeft: navBarWidth.width,
    }
}));