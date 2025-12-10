const features = [
  { title: "PDF ↔ JPG", desc: "Imágenes a PDF y viceversa", icon: "🖼️" },
  { title: "Audio ↔ MP3", desc: "Extraer/Convertir audio", icon: "🎵" },
  { title: "Video ↔ MP4", desc: "Formatos populares de video", icon: "🎬" },
];

export default function Features() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Funciones destacadas</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
