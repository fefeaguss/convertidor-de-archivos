import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="pt-28 text-center px-4">
        <h2 className="text-2xl font-bold">No has iniciado sesión</h2>
        <p className="text-gray-500 mt-2">Iniciá sesión para ver tu perfil</p>
      </div>
    );
  }

  return (
    <div className="pt-28 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mi perfil</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <p className="mb-2"><strong>Nombre:</strong> {user.name}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>

        <div className="mt-4 flex gap-3">
          <button onClick={() => navigate("/settings")} className="px-4 py-2 bg-indigo-600 text-white rounded">Configuración</button>
          <button onClick={() => { logout(); navigate("/"); }} className="px-4 py-2 border rounded">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}
