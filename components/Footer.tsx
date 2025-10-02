
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-brand-text-secondary">
        <div className="mb-4">
            <h3 className="font-serif text-2xl text-brand-text">Mani Foods</h3>
            <div className="w-16 h-0.5 bg-brand-yellow mx-auto mt-2"></div>
        </div>
        <p className="font-semibold">Contact Us</p>
        <p>Mirza Nauman Baig</p>
        <p className="font-bold tracking-widest mt-1 text-brand-yellow">0336-1414278</p>
        <p className="text-xs mt-6 text-gray-500">&copy; {new Date().getFullYear()} Mani Foods. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
