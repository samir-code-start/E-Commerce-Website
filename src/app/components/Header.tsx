
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { useCurrency } from '../context/CurrencyContext';

export function Header() {
  const { getTotalItems } = useCart();
  const { currency, toggleCurrency } = useCurrency();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Running', path: '/products?category=Running' },
    { name: 'Casual', path: '/products?category=Casual' },
    { name: 'Athletic', path: '/products?category=Athletic' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-sm'
          : 'bg-white border-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Comfit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-black relative group py-2',
                  location.pathname + location.search === link.path
                    ? 'text-black'
                    : 'text-gray-500'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300',
                    location.pathname + location.search === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">

            {/* Currency Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCurrency}
              className="font-bold w-12"
            >
              {currency === 'USD' ? '$' : '₹'}
            </Button>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="overflow-hidden mr-2"
                  >
                    <Input
                      placeholder="Search..."
                      className="h-9 w-[200px] bg-gray-100 border-none focus-visible:ring-1"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:bg-gray-100 rounded-full"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5" />
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigate through the site</SheetDescription>

                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Guest User</p>
                      <p className="text-sm text-gray-500">Welcome to Comfit</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      placeholder="Search products..."
                      className="pl-9 bg-gray-50 border-gray-200 w-full"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                          "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                          location.pathname === link.path
                            ? "bg-black text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
                    <Link to="/account" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                      <User className="w-5 h-5" />
                      <span className="font-medium">My Account</span>
                    </Link>
                    <Link to="/wishlist" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Wishlist</span>
                    </Link>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Sign In / Join
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
