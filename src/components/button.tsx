import React from 'react';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
  closeMobileMenu: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ closeMobileMenu }) => {
  return (
    <div className="flex items-center">
      <div className="hidden md:ml-4 md:flex md:items-center">
        <Link to="/login" onClick={closeMobileMenu}>
          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginButton;
