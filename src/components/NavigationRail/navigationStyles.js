import { makeStyles } from '@material-ui/core/styles';
import { navBarWidth } from '../../constants/constants'

export default makeStyles((theme) => ({
    navbar: {
        width: navBarWidth.width,
        height: '100vh',
        position: 'fixed',
        backgroundColor: theme.palette.common.white,
        borderRight: `1px solid ${theme.palette.grey[400]}`,
    },
    navbarNav: {
        height: '100%',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    navbarAction: {
        marginTop: 56,
        marginBottom: theme.spacing(2)
    },
    navItem: {
        margin: '0 auto',
        marginBlock: theme.spacing(1),
    },
}));