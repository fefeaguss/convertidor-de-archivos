import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-light dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold text-naranjamandarina">ConvertX</div>
          <div className="text-sm">El convertidor online minimalista</div>
        </div>

        <div className="flex gap-4 text-sm ">
          <a className="hover:underline  text-naranjamandarina">Términos</a>
          <a className="hover:underline  text-naranjamandarina ">Privacidad</a>
          <a className="hover:underline text-naranjamandarina">Soporte</a>
        </div>

        <div className="text-sm">© {new Date().getFullYear()} ConvertX</div>
      </div>
    </footer>
  );
}
