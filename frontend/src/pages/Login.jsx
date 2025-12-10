import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    login({ email });
    navigate("/perfil");
  };

  return (
    <div className="pt-28 flex justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          className="w-full p-3 rounded-lg border mb-4 bg-gray-50 dark:bg-gray-700"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="w-full py-3 bg-indigo-600 text-white rounded-lg">Entrar</button>
      </form>
    </div>
  );
}
