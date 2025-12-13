import { useState, useRef, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiUsers, FiEdit, FiZap, FiLogOut } from 'react-icons/fi';
import { MdWorkspacePremium } from "react-icons/md";

export default function UserMenu({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const Navigate = useNavigate();

  const navigatePerfil = () => {
    Navigate('/perfil');
  }
  const navigatePremium = () => {
    Navigate('/premium');
  }



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

          <button onClick={navigatePerfil} className="flex items-center gap-2 px-2 py-3 w-full text-naranjamandarina hover:bg-gray-100 rounded">
            <FiUser />  Perfil                                                                                          
          </button>

      
          
          <button onClick={navigatePremium}  className="flex items-center gap-2 px-2 py-3 w-full hover:bg-gray-100 rounded text-purple-600 font-semibold">
            <MdWorkspacePremium /> Mejora a Premium
          </button>
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

