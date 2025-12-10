import Header from "./components/Header";
import Home from "./pages/Home";
import ConverterCard from "./components/ConverterCard"; // componente reutilizable
import AdsBanner from "./components/AdBanner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { BigAds } from "./components/BigAds";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MultiUpload from "./pages/MultiUpload";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
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

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
