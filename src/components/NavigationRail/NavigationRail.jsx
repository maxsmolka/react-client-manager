import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { Fab, IconButton } from '@material-ui/core';
import routes from '../../routes/routes'

import useStyles from './navigationStyles'
import { Add } from '@material-ui/icons';
import PatientDialog from '../PatientDialog/PatientDialog';

const NavigationRail = () => {

    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.navbar}>
            <ul className={classes.navbarNav}>
                <Fab className={classes.navbarAction} color='secondary' onClick={() => setOpen(true)}>
                    <Add />
                </Fab>
                {routes.map((route, id) => 
                    <Link key={id} className={classes.navItem} 
                    to={route.path}
                    >
                        <IconButton >
                            {route.icon}
                        </IconButton>
                    </Link>
                )}
            </ul>
            <PatientDialog open={open} handleClose={handleClose}/>
        </div>
    )
}

export default NavigationRail
