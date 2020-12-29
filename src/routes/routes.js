import { DashboardRounded, EventTwoTone, HealingTwoTone, PeopleTwoTone } from "@material-ui/icons";
import AppointmentPage from "../pages/AppointmentPage/AppointmentPage";
import OverviewPage from "../pages/OverviewPage/OverviewPage";
import PatientPage from "../pages/PatientPage/PatientPage";
import TreatmentPage from "../pages/TreatmentPage/TreatmentPage";

const routes = [
    {
        path: "/",
        title: "Termine",
        icon: <EventTwoTone />,
        component: AppointmentPage
    },{
        path: "/kunden",
        title: "Kunden",
        icon: <PeopleTwoTone />,
        component: PatientPage
    },{
        path: "/uebersicht",
        title: "Übersicht",
        icon: <DashboardRounded />,
        component: OverviewPage
    },{
        path: "/behandlungen",
        title: "Behandlungen",
        icon: <HealingTwoTone />,
        component: TreatmentPage
    },
]

export default routes;