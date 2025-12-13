import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const navigatePremium = () => {
    navigate('/premium');
  }

  if (!user) {
    return (
      <div className="pt-28 text-center">
        <h2 className="text-2xl font-bold">No has iniciado sesión</h2>
        <p className="text-gray-500 mt-2">
          Iniciá sesión para ver tu perfil
        </p>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto bg-neutral-light dark:bg-neutral-dark min-h-screen pb-16 ">
      <h1 className="text-3xl font-bold mb-8">Mi cuenta</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* CONTENIDO PRINCIPAL */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* PERFIL */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Perfil</h2>
              <button
                onClick={() => navigate("/settings")}
                className="text-sm text-orange-500 hover:underline"
              >
                Cambiar
              </button>
            </div>

            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>País:</strong> Argentina</p>
              <p><strong>Zona horaria:</strong> UTC</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Email</h2>
              <button className="text-sm text-orange-500 hover:underline">
                Cambiar
              </button>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Mail actual: {user.email}
            </p>
          </div>
        </div>

        {/* PANEL DERECHO */}
        <aside className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow h-fit">
          <div className="flex flex-col items-center text-center">
            
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-gray-500">
                {user.name.charAt(0)}
              </span>
            </div>

            <p className="font-semibold">{user.name}</p>
            <span className="text-sm text-green-600 mb-4">
              Registrado
            </span>

            <button
            onClick={navigatePremium}
              className="w-full mb-3 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            >
              Mejora a Premium
            </button>

            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="w-full py-2 rounded-lg border text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}
