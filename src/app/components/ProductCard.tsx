import { Link } from 'react-router';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { useCurrency } from '../context/CurrencyContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { formatPrice } = useCurrency();

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 md:p-4 flex flex-col flex-1">
          <div className="text-xs md:text-sm text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2 line-clamp-1 group-hover:text-gray-600">{product.name}</h3>

          <div className="mt-auto">
            <div className="flex items-center gap-1 mb-1 md:mb-2">
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs md:text-sm font-medium">{product.rating}</span>
              <span className="text-xs md:text-sm text-gray-400">({product.reviews})</span>
            </div>
            <div className="text-base md:text-lg font-bold">{formatPrice(product.price)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
