
import React, { useState, useEffect } from 'react';
import type { MenuItem, MenuSize } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, selectedSize?: MenuSize) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<MenuSize | undefined>(item.sizes ? item.sizes[0] : undefined);

  useEffect(() => {
    if (item.sizes && item.sizes.length > 0 && !selectedSize) {
      setSelectedSize(item.sizes[0]);
    }
  }, [item.sizes, selectedSize]);

  const handleAddToCartClick = () => {
    onAddToCart(item, selectedSize);
  };

  const currentPrice = selectedSize ? selectedSize.price : item.price;

  return (
    <div className="bg-brand-light rounded-lg overflow-hidden shadow-lg h-full flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30">
      <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-brand-text mb-2">{item.name}</h3>
        <p className="text-brand-text-secondary text-sm mb-4 flex-grow">{item.description}</p>
        
        {item.sizes && (
          <div className="mb-4">
            <span className="text-sm text-brand-text-secondary mr-3">Size:</span>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {item.sizes.map(size => (
                <button
                  key={size.name}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 text-sm font-medium border-t border-b border-brand-yellow first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg transition-colors duration-200 ${
                    selectedSize?.name === size.name 
                      ? 'bg-brand-yellow text-brand-dark' 
                      : 'bg-transparent text-brand-yellow hover:bg-brand-yellow/20'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-between sm:items-center mt-auto pt-4 sm:gap-0">
          <p className="text-2xl font-bold text-brand-yellow text-center sm:text-left">
            Rs. {currentPrice?.toFixed(2)}
          </p>
          <button 
            onClick={handleAddToCartClick}
            className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;