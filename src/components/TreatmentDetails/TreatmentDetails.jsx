import React, { useState } from 'react'
import {Grid, Card, CardHeader, CardContent, Typography, TextField, Divider, Avatar, IconButton } from '@material-ui/core'
import { CirclePicker } from 'react-color';

import useStyles from './treatmentDetailsStyles'
import { Close, HealingOutlined } from '@material-ui/icons';

const TreatmentDetails = ({ setSelection, selected }) => {

    const classes = useStyles();

    return (
        <Card className={classes.treatment}>
            <CardHeader 
            avatar={
                <Avatar aria-label="color" style={{backgroundColor: (selected !== null) ? `${selected.color}` : 'grey'}} >
                    <HealingOutlined />
                </Avatar>
            }
            action={
                <IconButton aria-label='close-card' onClick={() =>  setSelection(null)}>
                    <Close />
                </IconButton>
            }
            title="Behandlung."
            subheader={new Date().toLocaleDateString('de-DE')} 
            />
            <CardContent>
                <Typography variant="h5" >{(selected !== null) ? selected.name : ""}</Typography>
                <Typography variant="subtitle1" paragraph>{(selected !== null) ? `€ ${selected.amount}` : ""}</Typography>
                <Divider />
            </CardContent>

        </Card>
    )
}

export default TreatmentDetails