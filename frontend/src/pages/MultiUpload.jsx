import React, { useState } from "react";

export default function MultiUpload() {
  const [files, setFiles] = useState([]);
  const [format, setFormat] = useState("PDF");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const remove = (idx) => setFiles((f) => f.filter((_, i) => i !== idx));

  const submit = (e) => {
    e.preventDefault();
    if (!files.length) return alert("Seleccioná archivos");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Convertidos ${files.length} archivos a ${format} (simulado)`);
      setFiles([]);
    }, 1200);
  };

  return (
    <div className="pt-28 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Subir varios archivos</h1>

      <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <input type="file" multiple onChange={onChange} className="mb-4" />

        <div className="flex items-center gap-3 mb-4">
          <select value={format} onChange={(e) => setFormat(e.target.value)} className="p-2 rounded">
            <option>PDF</option>
            <option>JPG</option>
            <option>MP3</option>
          </select>

          <button className="px-4 py-2 bg-indigo-600 text-white rounded">{loading ? "Procesando..." : "Convertir todo"}</button>
        </div>

        <div>
          {files.length === 0 ? (
            <div className="text-gray-500">No hay archivos seleccionados</div>
          ) : (
            <ul className="space-y-2">
              {files.map((f, i) => (
                <li key={i} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div>
                    <div className="font-medium">{f.name}</div>
                    <div className="text-xs text-gray-500">{(f.size / 1024).toFixed(1)} KB</div>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => remove(i)} className="text-sm text-red-600">Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
}
