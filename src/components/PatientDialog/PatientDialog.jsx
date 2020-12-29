import React, { useContext} from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, TextField, Grid } from "@material-ui/core";
import { PatientContext } from '../../context/patientContext' 
import { v4 as uuidv4 } from 'uuid'
import useStyles from './patientDialogStyles'

let patient = {
    id: '',
    name: '',
    firstname: '',
    type: '', //kassen oder privat
    street: '',
    code: '',
    location: '',
    remarks: '',
    appointments: []
}

const PatientModal = ({ open, handleClose }) =>  {

    const classes = useStyles()

    const { addPatient } = useContext(PatientContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        
        patient = {...patient, id: uuidv4(), name: e.target[0].value, firstname: e.target[1].value, street: e.target[2].value, code: Number(e.target[3].value), location: e.target[4].value}
        addPatient(patient)
        handleClose()
    }

    return (
        <div className={classes.root}>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                <DialogTitle>Hinzufügen</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Füge einen neuen Patienten hinzu.
                    </DialogContentText>
                    <form onSubmit={(e) => handleSubmit(e)} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField required fullWidth color="primary" label="Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField required fullWidth color="primary" label="Vorname" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth color="primary" label="Straße" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField fullWidth color="primary" label="Plz" />
                            </Grid>
                            <Grid item xs={9}>
                                <TextField fullWidth color="primary" label="Wohnort" />
                            </Grid>
                            <Grid item style={{ marginBlock: 32 }} >
                                <Button onClick={handleClose}>Abbrechen</Button>
                            </Grid> 
                            <Grid item style={{ marginBlock: 32 }} >
                                <Button type="submit" color="primary" variant="contained">Speichern</Button>
                            </Grid> 
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PatientModal
