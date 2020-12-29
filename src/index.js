import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import { TreatmentProvider } from './context/treatmentContext'
import { PatientProvider } from './context/patientContext'

ReactDOM.render(
    <TreatmentProvider>
        <PatientProvider>
            <App />
        </PatientProvider>
    </TreatmentProvider>, 
    document.getElementById('root'));