import "./index.scss";
import { Route, Router, Routes } from "react-router";
import { Login } from "@/Login";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "@/AuthContext";
import { PrivateRoute } from "@/PrivateRoute";
import { DummyPage } from "@/Page";
import { Logout } from "@/Logout";

export const App = () => {
  return (
    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
      <AuthContextProvider>
        <Logout />
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <DummyPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};
