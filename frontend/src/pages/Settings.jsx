import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");

  const submit = (e) => {
    e.preventDefault();
    updateProfile({ name });
    alert("Perfil actualizado (simulado)");
  };

  return (
    <div className="pt-28 px-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Configuración de la cuenta</h1>

      <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <label className="block text-sm mb-2">Email</label>
        <input value={email} disabled className="w-full p-3 rounded mb-4 bg-gray-100 dark:bg-gray-700" />

        <label className="block text-sm mb-2">Nombre</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded mb-4 bg-white dark:bg-gray-700" />

        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Guardar</button>
      </form>
    </div>
  );
}
