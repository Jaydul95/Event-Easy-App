import { createBrowserRouter, createRoutesFromElements, Link, Navigate, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import NavBar from './NavBar';
import AppInitializer from './AppInitializer';
import HomePage from '../Component/HomePage';
import SignUpLoayout from './SignUpLoayout';
import Event from '../Component/Event';
import EventList from '../Component/EventList';
import MyBookings from '../Component/MyBookings';

const FallBackElement = () => {
    return (
        <>
            **
        </>
    );
}
const AppRouter: React.FC<any> = () => {

    const router = createBrowserRouter([
        {
            id: "root",
            path: "",
            Component: AppInitializer,
            children: [
                {
                    index: true,
                    element: <Navigate to="/login" replace />
                },
                {
                    path: "",
                    Component: SignUpLoayout,
                    children: [
                        {
                            path: "login",
                            Component: Login
                        },
                        {
                            path: "signup",
                            Component: SignUp
                        }
                    ]
                },
                {
                    path: "home",
                    Component: NavBar,
                    children: [
                        {
                            index: true,
                            path: "",
                            Component: HomePage
                        }
                    ]
                },
                {
                    path: "events",
                    Component: NavBar,
                    children: [
                        {
                            index: true,
                            path: "",
                            Component: EventList
                        }
                    ]
                },
                {
                    path: "mybookings",
                    Component: NavBar,
                    children: [
                        {
                            index: true,
                            path: "",
                            Component: MyBookings
                        }
                    ]
                },
                {
                    path: "event-view",
                    Component: NavBar,
                    children: [
                        {
                            index: true,
                            path: "",
                            Component: Event
                        },
                    ]
                },
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router} fallbackElement={<FallBackElement/>}/>
        </>

    );
}

export default AppRouter;