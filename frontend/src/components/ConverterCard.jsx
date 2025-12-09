export default function ConverterCard() {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center">
      <div className="border-2 border-dashed border-indigo-400 bg-indigo-50 py-10 rounded-xl cursor-pointer hover:bg-indigo-100 transition">
        <div className="text-5xl mb-4">📁</div>
        <p className="text-gray-700 font-medium">
          Arrastrá tu archivo o hacé click para seleccionarlo
        </p>
        <input type="file" hidden />
      </div>

      <div className="mt-6 text-left">
        <label className="font-medium text-gray-700">Formato de salida</label>
        <select className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option>PDF</option>
          <option>JPG</option>
          <option>PNG</option>
          <option>MP3</option>
          <option>MP4</option>
        </select>
      </div>

      <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
        Convertir
      </button>
    </div>
  );
}
