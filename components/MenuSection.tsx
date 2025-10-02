
import React from 'react';
import type { MenuItem, MenuSize } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  title?: string;
  items: MenuItem[];
  onAddToCart: (item: MenuItem, selectedSize?: MenuSize) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, onAddToCart }) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <section className="py-8">
      {title && <h2 className="font-serif text-4xl text-brand-text mb-8 tracking-wider">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-center">
              {title === 'Daily Menu' && (
                <>
                  <p className="font-semibold text-brand-text-secondary">{weekDays[index % 7]}</p>
                  <div className="w-12 h-12 mx-auto mt-1 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark font-bold text-lg">{index + 1}</div>
                </>
              )}
            </div>
            <div className="flex-grow">
              <MenuItemCard item={item} onAddToCart={onAddToCart} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;