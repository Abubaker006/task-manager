"use client"
import React from "react";
import ProtectedRoute from "../../../components/authComponents/ProtectedRoute";
const UserDashboardPage = ({ params }) => {

    return (
        <>
            Welcome to the dasboard of ${params.userid}</>
    )
};

export default ProtectedRoute(UserDashboardPage); 
