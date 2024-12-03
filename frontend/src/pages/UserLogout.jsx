import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserLogout = () => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  let hasLoggedOut = false; // Flag to prevent multiple executions

  useEffect(() => {
    const logoutUser = async () => {
      if (hasLoggedOut) return; // Exit if already executed
      hasLoggedOut = true;

      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting back...");
        navigate("/", { replace: true });
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        localStorage.removeItem("token");
        setUser({
          email: "",
          fullname: {
            firstname: "",
            lastname: "",
          },
        });
        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error.response?.data || error.message);
        navigate("/home", { replace: true });
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center text-center font-bold">
      Logging out...
    </div>
  );
};

export default UserLogout;
