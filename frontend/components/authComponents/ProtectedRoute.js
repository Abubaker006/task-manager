"use client";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = (Component) => {
    return (props) => {
        const isAuthenticated = useAuth();
        console.log("isAuthenticated", isAuthenticated);
        if (!isAuthenticated) {
            return null; 
        }

        return <Component {...props} />;
    };
};

export default ProtectedRoute;
