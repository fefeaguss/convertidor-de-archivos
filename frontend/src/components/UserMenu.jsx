import { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { FiUser, FiSettings, FiUsers, FiEdit, FiZap, FiLogOut } from 'react-icons/fi';

export default function UserMenu({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative mt-6" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-300 bg-white shadow-sm flex items-center justify-center"
        aria-label="Abrir menú de usuario"
      >
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
        ) : (
          <FiUser className="text-gray-600 text-[20px]" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[220px] bg-white rounded-lg shadow-lg z-50 p-2 text-sm">
          <div className="px-2 py-3 font-medium text-gray-700 truncate">{user?.name || 'Invitado'}</div>
          <a href="/cuenta" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded">
            <FiSettings /> Configuración de la cuenta
          </a>
          
          <a href="/premium" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded text-purple-600 font-semibold">
            ⭐ Mejora a Premium
          </a>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-2 py-3 text-red-600 hover:bg-red-50 rounded w-full text-left"
          >
            <FiLogOut /> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

