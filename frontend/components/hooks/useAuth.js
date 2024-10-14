"use client"

import { useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";
import { getAuthToken } from "@/app/api/jwtUtils";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/signIn");
    }
  }, []);
  return isAuthenticated;
};

export default useAuth;
