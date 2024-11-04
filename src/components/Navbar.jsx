import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-gray-100 py-2 px-4 text-sm flex justify-between items-center">
        <div className="text-gray-600">
          10% off on First Order | Use Code - FIRST10
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="/" className="hover:text-gray-900 flex items-center gap-1">
            <MapPin size={16} />
            STORE LOCATOR
          </a>
          <span>|</span>
          <a href="/" className="hover:text-gray-900">
            TRACK ORDER
          </a>
        </div>
      </div>

      <div className="py-4 px-8 border-b">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif">Rutba</h1>
            <span className="text-xs text-gray-500">SINCE 1881</span>
            <span className="text-xs text-gray-500">India's Oldest Retailer</span>
          </div>

          <nav className="flex-1 flex justify-center">
            <ul className="flex gap-8">
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium">
                  SHORT KURTA
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium">
                  OCCASION
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium">
                  MEN
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium">
                  KIDS
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium">
                  ACCESSORIES
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-600 font-medium text-red-600">
                  SALE
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-gray-600"
              >
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg p-4 border rounded-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              )}
            </div>

            <a href="/" className="flex items-center gap-1 hover:text-gray-600">
              <User size={20} />
              <span className="text-xs">Sign In</span>
            </a>

            <a href="/" className="flex items-center gap-1 hover:text-gray-600">
              <Heart size={20} />
              <span className="text-xs">Wishlist</span>
            </a>

            <a href="/" className="flex items-center gap-1 hover:text-gray-600">
              <ShoppingBag size={20} />
              <span className="text-xs">Bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;