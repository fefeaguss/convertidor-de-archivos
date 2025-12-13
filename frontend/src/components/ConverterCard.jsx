import React, { useRef, useState } from "react";

export default function ConverterCard() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("PDF");
  const [loading, setLoading] = useState(false);

  const onSelect = (f) => {
    if (f) setFile(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) onSelect(f);
  };

  const convert = () => {
    if (!file) return alert("Seleccioná un archivo primero");
    // simulación frontend: acá harías fetch a tu backend
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`archivo ${file.name} convertido a ${format} (simulado)`);
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 bg-neutral-light dark:bg-neutral-dark rounded-2xl py-10">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Convertir archivo</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-6">
          Arrastrá y soltá o seleccioná un archivo. Soporta multiples formatos.
        </p>

        <div
          className="border-2 border-dashed border-naranjamandarina dark:border-naranjamandarina-600 rounded-xl py-12 flex flex-col items-center justify-center cursor-pointer mb-6"
          onClick={() => inputRef.current.click()}
        >
          <div className="text-5xl mb-4">📁</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">
            {file ? (
              <div>
                <div className="font-medium">{file.name}</div>
                <div className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</div>
              </div>
            ) : (
              "Arrastrá tu archivo aquí o hacé click para seleccionarlo"
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={(e) => onSelect(e.target.files?.[0])}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="flex-1 p-3 rounded-lg border bg-gray-50 dark:bg-gray-700"
          >
            <option>PDF</option>
            <option>JPG</option>
            <option>PNG</option>
            <option>MP3</option>
            <option>MP4</option>
          </select>

          <button
            onClick={convert}
            className="w-full sm:w-auto px-6 py-3 bg-naranjamandarina text-white rounded-lg font-semibold hover:bg-duraznoclaro disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Convirtiendo..." : "Convertir"}
          </button>
        </div>
      </div>
    </div>
  );
}
