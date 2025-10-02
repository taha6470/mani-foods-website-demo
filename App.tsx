
import React, { useState, useCallback, useMemo } from 'react';
import type { CartItem, MenuItem, MenuSize } from './types';
import { DAILY_MENU, SPECIAL_MENU } from './constants';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const handleAddToCart = useCallback((item: MenuItem, selectedSize?: MenuSize) => {
    setCartItems(prevItems => {
      const cartItemId = selectedSize ? `${item.id}-${selectedSize.name}` : item.id;
      const existingItem = prevItems.find(i => i.cartItemId === cartItemId);

      if (existingItem) {
        return prevItems.map(i =>
          i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        const newItem: CartItem = {
          ...item,
          cartItemId,
          selectedSize,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });
    setIsCartOpen(true);
  }, []);

  const handleRemoveFromCart = useCallback((cartItemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  }, []);

  const handleUpdateQuantity = useCallback((cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(cartItemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, [handleRemoveFromCart]);

  // FIX: Moved totalPrice calculation before handleCheckout to resolve usage before declaration error.
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
        const price = item.selectedSize ? item.selectedSize.price : (item.price || 0);
        return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const handleCheckout = useCallback(() => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you for your order! Your total is Rs. ${totalPrice.toFixed(2)}. We will contact you shortly.`);
    setCartItems([]);
    setIsCartOpen(false);
  }, [cartItems, totalPrice]);
  
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="bg-brand-dark min-h-screen font-sans text-brand-text">
      <Header cartCount={cartCount} onCartClick={handleToggleCart} />
      <main className="container mx-auto px-4 py-8">
        <MenuSection title="Daily Menu" items={DAILY_MENU} onAddToCart={handleAddToCart} />
        <div className="text-center my-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text tracking-wider">SPECIAL MENU</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>
        <MenuSection items={SPECIAL_MENU} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={handleToggleCart}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdate={handleUpdateQuantity}
        totalPrice={totalPrice}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;