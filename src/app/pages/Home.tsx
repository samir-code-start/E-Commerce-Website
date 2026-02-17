import { Link } from 'react-router';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-end md:items-center pb-20 md:pb-0">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759692072054-fe9904725c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uYWJsZSUyMHNuZWFrZXJzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzA5OTIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl pt-20 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Step Into Comfort
            </h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200">
              Premium shoes designed for every step of your journey. Experience unmatched comfort and style.
            </p>
            <Link to="/products">
              <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-gray-100">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full mb-4">
                <Truck className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full mb-4">
                <RefreshCw className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full mb-4">
                <Shield className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {['Running', 'Casual', 'Athletic', 'Formal'].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <ImageWithFallback
                  src={products.find(p => p.category === category)?.image || products[0].image}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 flex items-end p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-2xl font-bold">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline" size="sm" className="md:size-default">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Comfit Community</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first purchase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-white text-black hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
