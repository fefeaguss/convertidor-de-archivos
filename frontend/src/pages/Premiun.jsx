import React, { useState } from "react";

export default function Premium() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* IZQUIERDA */}
      <div className="flex items-center justify-center bg-[#FAF8F5] px-6">
        <div className="w-full max-w-md">
          {/* LOGO */}
          <div className="mb-8 text-center -mt-16">
            {/* Reemplazá esto por tu logo */}
            <img
              src="../public/logo.png"
              alt="FluxPDF"
              className="h-[250px] mx-auto"
            />
          </div>

          <h1 className="text-2xl font-semibold text-center mb-2 -mt-20">
            Accedé a FluxPDF Premium
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Más potencia para trabajar con tus documentos
          </p>

          {/* PLANES */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setPlan("monthly")}
              className={`rounded-xl border p-5 text-left transition
                ${
                  plan === "monthly"
                    ? "border-orange-500 bg-white shadow-md"
                    : "border-gray-300 bg-white/70"
                }
              `}
            >
              <p className="text-sm text-gray-500">Mensual</p>
              <p className="text-2xl font-bold">US$7</p>
              <p className="text-xs text-gray-400">Facturación mensual</p>
            </button>

            <button
              onClick={() => setPlan("yearly")}
              className={`relative rounded-xl border p-5 text-left transition
                ${
                  plan === "yearly"
                    ? "border-orange-500 bg-white shadow-md"
                    : "border-gray-300 bg-white/70"
                }
              `}
            >
              <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Ahorra 42%
              </span>
              <p className="text-sm text-gray-500">Anual</p>
              <p className="text-2xl font-bold">US$48</p>
              <p className="text-xs text-gray-400">US$4 / mes</p>
            </button>
          </div>

          {/* PAGO */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Método de pago</label>
            <input
              type="text"
              placeholder="Número de tarjeta · MM/AA · CVC"
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* CTA */}
          <button className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold transition">
            Activar Premium
          </button>

          {/* FOOTER INFO */}
          <div className="mt-5 text-xs text-gray-500 flex justify-center gap-6">
            <span>✔ Cancela cuando quieras</span>
            <span>✔ Pago seguro</span>
          </div>
        </div>
      </div>

      {/* DERECHA - NUEVO ESTILO CLARO */}
      <div className="relative flex items-center justify-center px-10 bg-gradient-to-br from-[#FFF4E8] via-[#FFE1C2] to-[#FFD1A1] overflow-hidden">
        <div className="relative z-10 max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Pasá a Premium sin límites
          </h2>

          <p className="text-gray-700 text-sm">
            Herramientas profesionales pensadas para productividad real, sin
            distracciones.
          </p>

          {/* CARDS */}
          <div className="grid gap-4 mt-6">
            <div className="bg-white rounded-xl p-4 shadow flex gap-3">
              <span className="text-orange-500 text-xl">⚡</span>
              <div>
                <p className="text-gray-900 font-medium">
                  Conversiones ilimitadas
                </p>
                <p className="text-xs text-gray-600">
                  Procesá tantos archivos como necesites.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow flex gap-3">
              <span className="text-orange-500 text-xl">🔍</span>
              <div>
                <p className="text-gray-900 font-medium">OCR inteligente</p>
                <p className="text-xs text-gray-600">
                  Extraé texto de documentos escaneados.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow flex gap-3">
              <span className="text-orange-500 text-xl">✍️</span>
              <div>
                <p className="text-gray-900 font-medium">Firmas digitales</p>
                <p className="text-xs text-gray-600">
                  Firmá PDFs desde cualquier dispositivo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow flex gap-3">
              <span className="text-orange-500 text-xl">🚫</span>
              <div>
                <p className="text-gray-900 font-medium">Sin publicidad</p>
                <p className="text-xs text-gray-600">
                  Enfocate solo en tu trabajo.
                </p>
              </div>
            </div>
          </div>
          
        </div>

  {/* BACKGROUND ABSTRACTO - ONDAS */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-orange-400/30 rounded-full blur-[120px]" />
  <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] bg-amber-300/30 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-orange-500/20 rounded-full blur-[100px]" />
  
</div>
                




      </div>
      
    </div>
  );
}
