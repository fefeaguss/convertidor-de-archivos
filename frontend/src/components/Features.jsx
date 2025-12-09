const features = [
  { title: "PDF ↔ JPG", icon: "🖼️" },
  { title: "Audio ↔ MP3", icon: "🎵" },
  { title: "Video ↔ MP4", icon: "🎬" },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-10">
        Funciones disponibles
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-50 shadow-sm rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <p className="font-medium text-gray-700">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
