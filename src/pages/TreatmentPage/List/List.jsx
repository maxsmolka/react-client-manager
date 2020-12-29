import React, { useContext} from 'react'
import { List as MuiList, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Slide, ListItemAvatar, Avatar } from '@material-ui/core'
import { HealingTwoTone, DeleteTwoTone } from '@material-ui/icons'

import { TreatmentContext } from '../../../context/treatmentContext'
import useStyles from './listStyles'

const List = ({ setSelection, selected, _removeTreatment }) => {

    const { treatments } = useContext(TreatmentContext);

    const classes = useStyles();

    return (
        <MuiList className={classes.list}>
            {treatments.map((treatment) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={treatment.id}>
                    <ListItem 
                    button 
                    selected={
                        (selected !== null && selected.id === treatment.id) ? true : false
                    }
                    onClick={() =>  setSelection(treatment)}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: `${treatment.color}` }}>
                                <HealingTwoTone />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={treatment.name} secondary={(treatment.amount === 0.00) ? "" : `€ ${treatment.amount}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => _removeTreatment(treatment.id)}>
                                <DeleteTwoTone />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MuiList>
    )
}

export default List
