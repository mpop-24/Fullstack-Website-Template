import React, { useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Navigate } from "react-router-dom";

type WrapperProps = {
  children: ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setAuthenticated(!!session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return null; // Return `null` instead of an empty array
  }

  return authenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default Wrapper;
