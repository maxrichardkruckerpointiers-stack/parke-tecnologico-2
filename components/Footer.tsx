import React from 'react';
import { APP_NAME } from '../constants';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{APP_NAME}</h3>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Cartagena Tech Hub. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cartagena-teal transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-cartagena-teal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-cartagena-teal transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-700">
           <p>Diseñado para la innovación en el Caribe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;