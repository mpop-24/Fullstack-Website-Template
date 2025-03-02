import { React } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };
  return (
    <div>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}
