import React from "react";

export default function History() {
  // ejemplo estático — conectalo luego con tu backend
  const items = [
    { id: 1, from: "foto.png", to: "PDF", date: "2025-11-30" },
    { id: 2, from: "documento.docx", to: "PDF", date: "2025-11-28" },
  ];

  return (
    <div className="pt-28 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Historial</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        {items.map((it) => (
          <div key={it.id} className="flex justify-between py-3 border-b last:border-none">
            <div>
              <div className="font-medium">{it.from} → {it.to}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{it.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm px-3 py-1 rounded bg-indigo-600 text-white">Descargar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
