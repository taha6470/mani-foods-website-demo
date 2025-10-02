
import React from 'react';
import type { CartItem } from '../types';
import { PlusIcon, MinusIcon, TrashIcon, CloseIcon } from '../constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (cartItemId: string) => void;
  onUpdate: (cartItemId: string, quantity: number) => void;
  totalPrice: number;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemove,
  onUpdate,
  totalPrice,
  onCheckout,
}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-brand-light">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-text">Your Order</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-brand-light transition-colors">
              <CloseIcon className="w-6 h-6 text-brand-text-secondary"/>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col justify-center items-center text-center p-6">
              <p className="text-brand-text-secondary text-lg">Your cart is empty.</p>
              <p className="text-sm text-gray-500 mt-2">Add some delicious food to get started!</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map(item => (
                <div key={item.cartItemId} className="flex items-center space-x-2 md:space-x-4 bg-brand-light p-3 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-brand-text">{item.name}</h4>
                    {item.selectedSize && <p className="text-sm text-brand-text-secondary">{item.selectedSize.name}</p>}
                    <p className="text-sm font-bold text-brand-yellow">Rs. {(item.selectedSize?.price || item.price || 0).toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                        <button onClick={() => onUpdate(item.cartItemId, item.quantity - 1)} className="p-1 rounded-full bg-brand-yellow/20 hover:bg-brand-yellow/40 text-brand-yellow"><MinusIcon className="w-4 h-4" /></button>
                        <span className="px-3 font-semibold">{item.quantity}</span>
                        <button onClick={() => onUpdate(item.cartItemId, item.quantity + 1)} className="p-1 rounded-full bg-brand-yellow/20 hover:bg-brand-yellow/40 text-brand-yellow"><PlusIcon className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.cartItemId)} className="text-gray-500 hover:text-brand-red transition-colors">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="p-6 border-t border-brand-light mt-auto">
            <div className="flex justify-between items-center mb-4 text-xl">
              <span className="font-semibold text-brand-text">Total:</span>
              <span className="font-bold text-brand-yellow">Rs. {totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              disabled={cartItems.length === 0}
              className="w-full bg-brand-red text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;