import React, { useState, useContext } from 'react'
import { Divider, Grid, Hidden, TextField, Typography } from '@material-ui/core'
import PatientDetails from '../../components/PatientDetails/PatientDetails'
import { PatientContext } from '../../context/patientContext'
import List from './List/List'

import useStyles from './patientPageStyles'

const PatientPage = () => {

    const classes = useStyles();

    const [selected, setSelection] = useState(null);
    const [ filter, setFilter ] = useState('')
    const { deletePatient } = useContext(PatientContext);

    const _removePatient = (id) => {
        deletePatient(id)
        setSelection(null);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} 
                    sm={12} 
                    md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth 
                            // size="small" 
                            variant="outlined" label="Suche" placeholder="Name des Patienten.."
                            onChange={(e) => setFilter(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <List setSelection={setSelection} selected={selected} _removePatient={_removePatient} filter={filter}/>
                        </Grid>
                    </Grid>
                    <Hidden mdUp>
                        <Divider />
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <div>
                        {
                            selected !== null ?
                            <PatientDetails setSelection={setSelection} selected={selected}/> :
                            <Typography variant="h6" color="textSecondary" align="center">
                                Klicke auf einen Patienten aus der Liste um weitere Informationen anzuzeigen und zu ändern
                            </Typography>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default PatientPage
