import { Link } from 'react-router';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCurrency } from '../context/CurrencyContext';

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const { formatPrice, convertPrice, currency } = useCurrency();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Add some products to your cart to get started
          </p>
          <Link to="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotalUSD = getTotalPrice();
  const subtotal = convertPrice(subtotalUSD);

  // Shipping Logic
  // USD: Free > 100, Cost 9.99
  // INR: Free > 999, Cost 99
  const freeShippingThreshold = currency === 'USD' ? 100 : 999;
  const shippingCost = currency === 'USD' ? 9.99 : 99;

  const isFreeShipping = subtotal > freeShippingThreshold;
  const shipping = isFreeShipping ? 0 : shippingCost;

  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.product.id}-${item.size}-${item.color}`}
              className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallback
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <div className="text-sm text-gray-600">
                      Size: {item.size} | Color: {item.color}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="font-bold">
                    {formatPrice(item.product.price * item.quantity)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                <span className="font-medium">
                  {currency === 'USD'
                    ? formatPrice(subtotal)
                    : `₹${subtotal.toLocaleString('en-IN')}`
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {isFreeShipping ? 'FREE' : (currency === 'USD' ? `$${shippingCost}` : `₹${shippingCost}`)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">
                  {currency === 'USD' ? formatPrice(tax) : `₹${Math.round(tax).toLocaleString('en-IN')}`}
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>
                  {currency === 'USD'
                    ? formatPrice(total)
                    : `₹${Math.round(total).toLocaleString('en-IN')}`
                  }
                </span>
              </div>
            </div>

            {!isFreeShipping && (
              <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm mb-4">
                Add {currency === 'USD'
                  ? formatPrice(freeShippingThreshold - subtotal)
                  : `₹${(freeShippingThreshold - subtotal).toLocaleString('en-IN')}`
                } more to get free shipping!
              </div>
            )}

            <Link to="/checkout">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>

            <Link to="/products" className="block mt-4">
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
