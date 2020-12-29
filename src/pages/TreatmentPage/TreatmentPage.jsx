import React, { useState, useContext } from 'react'
import { Grid, TextField, Hidden, Divider, Button, Typography, Slide } from '@material-ui/core'
import { CirclePicker } from 'react-color';
import { Add } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid'
import TreatmentDetails from '../../components/TreatmentDetails/TreatmentDetails'
import List from './List/List';

import { TreatmentContext } from '../../context/treatmentContext' 
import useStyles from './treatmentPageStyles'

const initialState = {
    color: '',
    name: '',
    amount: '',
}


const TreatmentPage = () => {
    
    const classes = useStyles();

    const { addTreatment, updateTreatment, deleteTreatment } = useContext(TreatmentContext);

    const [selected, setSelection] = useState(null);
    const [name, setName] = useState('');
    const [inputData, setInputData] = useState(initialState)

    const _createTreansaction = () => {
        const treatment = { ...inputData, name: name, amount: Number(inputData.amount), id: uuidv4()}
        addTreatment(treatment)
        setInputData(initialState)
    }

    const _updateTreatment = () => {
        // setInputData({...inputData, id: selected.id, color: selected.color, amount: selected.amount})
        updateTreatment(selected)
        setInputData(initialState)
        setSelection(null)
    }

    const _removeTreatment = (id) => {
        deleteTreatment(id)
        setSelection(null);
    }

    const _handlePriceChange = (e) => {
        setInputData({...inputData, amount: Number(e.target.value)})
        setSelection({...selected, amount: e.target.value})
    }
  
    const _handleColorChange = (color) => {
        setInputData({ ...inputData, color: color.hex })
        setSelection({...selected, color: color.hex})
    }

    const _checkName = (name) => {
        // let array = treatments.filter(t => t.name === name);
        // let btn = document.getElementById("submit-name-btn");
        // btn.disabled = false;
        // if(array.length > 0) {
        //     console.log(array.length)
        //     console.log(btn.dis)
        //     return;
        // }else if(name.length < 4) {
        //     console.log(name.length)
        //     return 
        // }
        setName(name)
        
    }

    return (
        <div className={classes.root} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <TextField fullWidth 
                            // size="small" 
                            variant="outlined" label="Neu" placeholder="Name der Behandlung.."
                            onChange={(e) => _checkName(e.target.value) }/>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                            id="submit-name-btn"
                            className={classes.button}
                            fullWidth 
                            // disabled={true}
                            variant="contained" color="primary"
                            onClick={_createTreansaction}>
                                <Add />
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <List setSelection={setSelection} selected={selected} _removeTreatment={_removeTreatment} />
                        </Grid>
                    </Grid>
                    <Hidden mdUp>
                        <Divider />
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {
                        selected !== null ?
                        <React.Fragment>
                        <TreatmentDetails setSelection={setSelection} selected={selected}/>
                        <Grid container spacing={0}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom >
                                    Wähle eine Farbe für die Behandlung
                                </Typography>
                                <div className={classes.picker}>
                                    <CirclePicker onChange={(color) => _handleColorChange(color) } />
                                </div>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom >
                                    Gib den aktuellen Betrag ein     
                                </Typography>
                                <TextField className={classes.picker} fullWidth variant="outlined" label="Betrag"
                                inputProps={{
                                    type: "number",
                                    min: "0.00",
                                    step: "0.01"
                                }}
                                value={selected.amount}
                                onChange={(e) => _handlePriceChange(e)} />
                                <Button variant="text" color="primary" 
                                disabled={(selected.amount !== 0 && selected.color !== initialState.color) ? false : true}
                                onClick={_updateTreatment}>
                                    speichern.
                                </Button>
                            </Grid>
                        </Grid>
                        </React.Fragment> :
                        <Typography variant="h6" color="textSecondary" align="center">Klicke auf eine Behandlung aus der Liste um weitere Informationen anzuzeigen und zu ändern</Typography>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default TreatmentPage
