import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import RegionView from './ViewApi/RegionView'
import CountryView from './ViewApi/CountryView'
import LocationView from './ViewApi/LocationView'
import DepartmentView from './ViewApi/DepartmentView'
import DependentView from './ViewApi/DependentView'
import EmployeeView from './ViewApi/EmployeeView'
import JobView from './ViewApi/JobView'



export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <RegionView /> },
            { path: 'country', element: <CountryView /> },
            { path: 'location', element: <LocationView /> },
            { path: 'department', element: <DepartmentView /> },
            { path: 'employee', element: <EmployeeView /> },
            { path: 'dependent', element: <DependentView /> },
            { path: 'job', element: <JobView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}