import React from 'react'
import { Card, CardHeader, CardContent, Typography, Avatar, Grid, Divider, IconButton, capitalize, CardActions, Button } from '@material-ui/core'
import { Close } from '@material-ui/icons';

import useStyles from './patientDetailsStyles'

const PatientDetails = ({ setSelection, selected }) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.patient} >
            <CardHeader 
            title="Patient"             
            avatar={
                <Avatar aria-label="color">
                    {capitalize(selected.name.charAt(0))}
                </Avatar>
            }
            action={
                <IconButton aria-label='close-card' onClick={() =>  setSelection(null)}>
                    <Close />
                </IconButton>
            }
            />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}> 
                        <Typography >Name: {selected.name}</Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Typography >Vorname: {selected.firstname}</Typography>
                    </Grid>
                    <Grid item xs={12}> 
                        <Typography >Straße: {selected.street}</Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Typography >Plz: {selected.code}</Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Typography paragraph >Wohnort: {selected.location}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Divider />
                            { selected.appointments.length > 0 ?
                                <div>
                                    <Typography variant="subtitle2">Termine:</Typography>
                                        {selected.appointments.map((a) => (
                                        <div>{a}</div>
                                    ))}
                                </div> :
                                ""
                            }
                        <Divider />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button>Speichern</Button>
            </CardActions>
        </Card>
    )
}
export default PatientDetails
