import { RouterProvider } from 'react-router';
import { CartProvider } from './context/CartContext';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';

import { CurrencyProvider } from './context/CurrencyContext';

export default function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </CurrencyProvider>
  );
}
