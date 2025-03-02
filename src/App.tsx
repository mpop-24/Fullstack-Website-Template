import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@/app/dashboard/page";
import LoginPage from "@/app/login/page";
import SignUpPage from "@/app/signup/page";

import Wrapper from "./app/wrapper/dash-wrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <DashboardPage />
            </Wrapper>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
