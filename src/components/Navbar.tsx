import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Camera className="h-6 w-6 text-theme" />
              <span className="ml-2 text-xl font-rockybilly text-white">Vivid Lens</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-white hover:text-theme px-3 py-2 rounded-md text-base font-rockybilly tracking-wide">Home</Link>
              <Link to="/gallery" className="text-white hover:text-theme px-3 py-2 rounded-md text-base font-rockybilly tracking-wide">Gallery</Link>
              <Link to="/testimonials" className="text-white hover:text-theme px-3 py-2 rounded-md text-base font-rockybilly tracking-wide">Testimonials</Link>
              <Link to="/contact" className="text-white hover:text-theme px-3 py-2 rounded-md text-base font-rockybilly tracking-wide">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-theme"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-theme block px-3 py-2 rounded-md text-lg font-rockybilly tracking-wide">Home</Link>
            <Link to="/gallery" className="text-white hover:text-theme block px-3 py-2 rounded-md text-lg font-rockybilly tracking-wide">Gallery</Link>
            <Link to="/testimonials" className="text-white hover:text-theme block px-3 py-2 rounded-md text-lg font-rockybilly tracking-wide">Testimonials</Link>
            <Link to="/contact" className="text-white hover:text-theme block px-3 py-2 rounded-md text-lg font-rockybilly tracking-wide">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};