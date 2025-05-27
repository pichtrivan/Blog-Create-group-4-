import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

const AuthLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Only render the outlet if authenticated
  return isAuthenticated ? <Outlet /> : null;
};

export default AuthLayout;
