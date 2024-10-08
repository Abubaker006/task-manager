"use client"
import React,{useEffect} from "react";
import ProtectedRoute from "../../components/authComponents/ProtectedRoute";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router=useRouter();
  useEffect(() => {
    const userId = "23123"; 
    router.push(`/dashboard/${userId}`);
  }, [router]); 
  return <p>Redirecting to User Dashboard....</p>
};

export default ProtectedRoute(DashboardPage);  