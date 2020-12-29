import React from 'react'
// import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core'
// import { Search } from '@material-ui/icons'

import useStyles from './appointmentPageStyles'

const AppointmentPage = () => {

    const classes = useStyles();

    return (
        <div>
            {/* <AppBar position="static" 
            // color="default" 
            elevation='1'>
                <Toolbar variant="dense">
                    <Typography className={classes.title} variant="h6" noWrap>Terminübersicht</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <Search />
                        </div>
                        <InputBase
                        placeholder="Suche.."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar> */}
        </div>
    )
}

export default AppointmentPage
