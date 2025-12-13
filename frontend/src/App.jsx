import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import CleanLayout from "../layouts/CleanLayout";

import Home from "./pages/Home";
import Premium from "./pages/Premiun";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import Profile from "./pages/Profile";
import MultiUpload from "./pages/MultiUpload";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="bg-neutral-light dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Routes>

        {/* 🌐 RUTAS NORMALES (con Header/Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/historial"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />

          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          

          <Route
            path="/multi"
            element={
              <PrivateRoute>
                <MultiUpload />
              </PrivateRoute>
            }
          />
        </Route>

        {/* 🔐 AUTH (sin footer si querés después) */}
        <Route element={<CleanLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/premium" element={<Premium />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  );
}
