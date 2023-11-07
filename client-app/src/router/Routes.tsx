import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App/Layout/App";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../features/activities/details/ActivityDetails";
import ActivitForm from "../features/activities/form/ActivitForm";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivitForm key='create' />},
            {path: 'manage/:id', element: <ActivitForm key='manage' />},
        ]
    }
]

export const router = createBrowserRouter(routes);