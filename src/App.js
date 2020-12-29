import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useStyles from './styles';

import AppointmentPage from './pages/AppointmentPage/AppointmentPage';
import PatientPage from './pages/PatientPage/PatientPage';
import OverviewPage from './pages/OverviewPage/OverviewPage';
import TreatmentPage from './pages/TreatmentPage/TreatmentPage';
import NavigationRail from './components/NavigationRail/NavigationRail';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme/theme'

const App = () => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <NavigationRail />
                <main className={classes.main}>
                    <Switch>
                        <Route path='/' exact component={AppointmentPage} />
                        <Route path='/kunden' component={PatientPage} />
                        <Route path='/uebersicht' component={OverviewPage} />
                        <Route path='/behandlungen' component={TreatmentPage} />
                    </Switch>
                </main>
            </Router>
        </ThemeProvider>
    )
}

export default App
