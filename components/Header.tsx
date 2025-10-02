
import React from 'react';
import { CartIcon } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-40 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-left">
            <h1 className="font-serif text-3xl md:text-4xl text-brand-text tracking-wider">Mani Foods</h1>
            <p className="font-script text-xl md:text-2xl text-brand-yellow -mt-1">The Best In Town</p>
        </div>
        <button 
          onClick={onCartClick}
          className="relative text-brand-text hover:text-brand-yellow transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
          aria-label="Open Cart"
        >
          <CartIcon className="w-8 h-8" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 block h-6 w-6 rounded-full bg-brand-red text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3 ring-2 ring-brand-dark">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
