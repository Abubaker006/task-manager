"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const token = query.get("token");
      if (token) {
        Cookies.set("token", token, { path: "/" });
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
        router.push("/dashboard");
      }
    };

    handleAuth();
  }, [router]);

  return <>{children}</>;
};

export default AuthProvider;
