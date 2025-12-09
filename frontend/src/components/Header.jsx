export default function Header() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">ConvertX</h1>

        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#">Inicio</a>
          <a href="#">Funciones</a>
          <a href="#">Historial</a>
          <a href="#">Perfil</a>
        </div>
      </div>
    </nav>
  );
}
