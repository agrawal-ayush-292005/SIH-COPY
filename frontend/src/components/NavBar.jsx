import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // This would come from context in real app
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img 
        onClick={() => navigate('/')} 
        className="w-44 cursor-pointer" 
        src={assets.logo} 
        alt="Logo" 
      />
      
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <Link to="/">
          <li className="py-1">HOME</li>
        </Link>
        <Link to="/doctor">
          <li className="py-1">ALL DOCTORS - noot doctors</li>
        </Link>
        <Link to="/about">
          <li className="py-1">ABOUT</li>
        </Link>
        <Link to="/contact">
          <li className="py-1">CONTACT</li>
        </Link>
      </ul>

      <div className="flex items-center gap-4">
        {token && (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/myprofile')} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate('/myappointments')} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        )}
        {!token && (
          <button 
            onClick={() => navigate('/login')} 
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img 
          onClick={() => setShowMenu(true)} 
          className="w-6 md:hidden" 
          src={assets.menu_icon} 
          alt="Menu" 
        />

        {/* Mobile menu */}
        {showMenu && (
          <div className="fixed w-full md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all">
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="Logo" />
              <img 
                className="w-7" 
                onClick={() => setShowMenu(false)} 
                src={assets.cross_icon} 
                alt="Close" 
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <Link onClick={() => setShowMenu(false)} to="/">HOME</Link>
              <Link onClick={() => setShowMenu(false)} to="/doctor">ALL DOCTORS</Link>
              <Link onClick={() => setShowMenu(false)} to="/about">ABOUT</Link>
              <Link onClick={() => setShowMenu(false)} to="/contact">CONTACT</Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;


