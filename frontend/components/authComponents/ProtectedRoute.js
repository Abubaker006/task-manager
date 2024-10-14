"use client";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = (Component) => {
    return (props) => {
        const isAuthenticated = useAuth();
        if (!isAuthenticated) {
            return null; 
        }

        return <Component {...props} />;
    };
};

export default ProtectedRoute;
