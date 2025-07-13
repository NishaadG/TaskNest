// hooks/useUserAuth.js

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
  const { user, loading, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // Still fetching, no decision yet
    if (!user) {
      clearUser();        // Clear token and user state
      navigate("/login"); // Redirect to login if unauthenticated
    }
  }, [user, loading, clearUser, navigate]);
};
