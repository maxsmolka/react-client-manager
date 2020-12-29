import React, { useReducer, createContext } from 'react'

import patientContextReducer from './patientContextReducer' 

const initialState = [];

export const PatientContext = createContext(initialState)

export const PatientProvider = ({ children }) => {

    const [patients, dispatch] = useReducer(patientContextReducer, initialState);

    // Actions
    const deletePatient = (id) => dispatch({ type: 'DELETE_PATIENT', payload: id });
    const addPatient = (patient) => dispatch({ type: 'ADD_PATIENT', payload: patient });
    const updatePatient = (patient) => dispatch({ type: 'UPDATE_PATIENT', payload: patient });

    return(
        <PatientContext.Provider value={{ 
            deletePatient,
            addPatient,
            updatePatient,
            patients
         }}>
            { children }
        </PatientContext.Provider>
    )
}