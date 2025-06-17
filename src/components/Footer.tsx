
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400">Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-gray-400">by</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lakshan A.S
            </span>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 Lakshan Amineni. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
