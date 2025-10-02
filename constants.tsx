
import React from 'react';
import type { MenuItem } from './types';

export const DAILY_MENU: MenuItem[] = [
  {
    id: 'dm01',
    name: 'Dal Mash',
    description: 'A rich and creamy lentil dish made with urad dal, slow-cooked with aromatic spices, fresh herbs, and garnished with green chilies and ginger julienne.',
    image: '/images/dal-mash.jpg',
    sizes: [
      { name: 'Small', price: 200 },
      { name: 'Full', price: 400 },
    ],
  },
  {
    id: 'dm02',
    name: 'Chicken Qorma',
    description: 'Tender chicken pieces simmered in a rich, creamy tomato and yogurt-based gravy with aromatic spices, garnished with fresh cilantro. A classic Mughlai delicacy.',
    image: '/images/chicken-qorma.jpg',
    sizes: [
      { name: 'Small', price: 350 },
      { name: 'Full', price: 600 },
    ],
  },
  {
    id: 'dm03',
    name: 'Chicken Haleem',
    description: 'A slow-cooked traditional savory porridge of wheat, barley, lentils, and tender chicken pieces, garnished with fresh herbs, fried onions, and green chilies. Rich in flavor and texture.',
    image: '/images/chicken-haleem.jpg',
    sizes: [
      { name: 'Small', price: 300 },
      { name: 'Full', price: 550 },
    ],
  },
    {
    id: 'dm04',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with succulent chicken and a mix of traditional spices.',
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { name: 'Small', price: 350 },
      { name: 'Full', price: 600 },
    ],
  },
];

export const SPECIAL_MENU: MenuItem[] = [
  {
    id: 'sm01',
    name: 'Mutton Shanwari',
    description: 'A classic Pashtun dish with tender mutton pieces cooked in a tomato and green chili base.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 2500,
  },
  {
    id: 'sm02',
    name: 'Qeema Muttor Aloo',
    description: 'Aromatic spiced minced mutton cooked with tender potatoes and fresh green peas in a rich, thick gravy with traditional herbs and spices.',
    image: '/images/qeema-mutton-aloo.jpg',
    price: 1500,
  },
  {
    id: 'sm03',
    name: 'Kabab Masla',
    description: 'Succulent kebabs simmered in a rich, tangy, and spicy masala gravy.',
    image: 'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1200,
  },
  {
    id: 'sm04',
    name: 'Palak Chicken',
    description: 'Tender chicken pieces slow-cooked in a rich, creamy spinach gravy infused with aromatic spices and fresh herbs. A classic saag dish with authentic flavors.',
    image: '/images/palak-chicken.jpg',
    price: 1500,
  },
  {
    id: 'sm05',
    name: 'Pakora Karri',
    description: 'Soft vegetable fritters dunked in a tangy and savory yogurt-based curry.',
    image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1200,
  },
  {
    id: 'sm06',
    name: 'Chicken Pulao',
    description: 'Flavorful and aromatic one-pot rice dish with chicken, cooked in a seasoned broth.',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 2000,
  },
];

export const CartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export const MinusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
);

export const TrashIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

export const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
