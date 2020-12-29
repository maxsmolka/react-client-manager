import React, { useContext} from 'react'
import { List as MuiList, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { DeleteTwoTone } from '@material-ui/icons'

import { PatientContext } from '../../../context/patientContext'
import useStyles from './listStyles'

const List = ({ setSelection, selected, _removePatient, filter }) => {

    const { patients } = useContext(PatientContext);

    const classes = useStyles();

    // onChangeInputValue = (event, context) => {
    //     var filter = event.target.value;
    //     for (var i = 0; i < context.state.packages.length; i++) {
    //         var listItem = context.state.packages[i].package
    //         var item = document.getElementsByClassName("item")[i]
    //         if(listItem.indexOf(filter) > -1) {
    //             item.style.display  ="";
    //         } else {
    //             item.style.display  ="none";
    //         }
    //     }
    // }

    return (
        <MuiList className={classes.list}>
            {patients.map((p) => (
                    <ListItem 
                    button 
                    selected={
                        (selected !== null && selected.id === p.id) ? true : false
                    }
                    onClick={() =>  setSelection(p)}>
                        <ListItemText 
                        primary={`${p.name + ", " + p.firstname}`} 
                        // secondary={(treatment.amount === 0.00) ? "" : `€ ${treatment.amount}`} 
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => _removePatient(p.id)}>
                                <DeleteTwoTone />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
            ))}
        </MuiList>
    )
}

export default List
