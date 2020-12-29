import React, { useReducer, createContext } from 'react'

import treatmentContextReducer from './treatmentContextReducer' 

const initialState = [];

export const TreatmentContext = createContext(initialState)

export const TreatmentProvider = ({ children }) => {

    const [treatments, dispatch] = useReducer(treatmentContextReducer, initialState);

    // Actions
    const deleteTreatment = (id) => dispatch({ type: 'DELETE_TREATMENT', payload: id });
    const addTreatment = (treatment) => dispatch({ type: 'ADD_TREATMENT', payload: treatment });
    const updateTreatment = (treatment) => dispatch({ type: 'UPDATE_TREATMENT', payload: treatment });

    // console.log(treatments)

    return(
        <TreatmentContext.Provider value={{ 
            deleteTreatment,
            addTreatment,
            updateTreatment,
            treatments
         }}>
            { children }
        </TreatmentContext.Provider>
    )
}