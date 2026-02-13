import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'CloudWalk Runner',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJ1bm5pbmclMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA5OTIyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Running',
    description: 'Lightweight running shoes with superior cushioning and breathable mesh upper. Perfect for long-distance runs and daily training.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['White', 'Black', 'Grey'],
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Urban Classic Boot',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1769038946405-c1f89366a8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxlYXRoZXIlMjBib290c3xlbnwxfHx8fDE3NzA5OTIyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Boots',
    description: 'Premium leather boots with classic design. Durable construction and comfortable fit for all-day wear.',
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ['Black', 'Brown'],
    rating: 4.9,
    reviews: 156
  },
  {
    id: '3',
    name: 'Comfort Loafer',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1616663308968-58162d332720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGNhc3VhbCUyMHNob2VzfGVufDF8fHx8MTc3MDk5MjI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    description: 'Stylish casual loafers perfect for everyday wear. Premium suede material with cushioned insole.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Brown', 'Tan', 'Navy'],
    rating: 4.6,
    reviews: 89
  },
  {
    id: '4',
    name: 'Speed Trainer Pro',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1759908065161-d3bd8f5e9271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYXRobGV0aWMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA5MTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Athletic',
    description: 'High-performance training shoes with responsive cushioning and excellent grip. Ideal for cross-training and gym workouts.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Blue', 'Red', 'Black'],
    rating: 4.7,
    reviews: 178
  },
  {
    id: '5',
    name: 'Marathon Elite',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1762690285055-fa80848e825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBydW5uaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzcwOTkyMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Running',
    description: 'Professional-grade running shoes designed for marathon runners. Advanced energy return technology and lightweight design.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Red', 'Orange', 'White'],
    rating: 4.9,
    reviews: 312
  },
  {
    id: '6',
    name: 'Street Style Sneaker',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1760006502808-e44ef11b3bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwY2FzdWFsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzcwOTkyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    description: 'Trendy street-style sneakers that combine fashion with comfort. Perfect for casual outings and everyday style.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Grey', 'White', 'Black'],
    rating: 4.5,
    reviews: 203
  },
  {
    id: '7',
    name: 'Flex Motion Runner',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1759692072054-fe9904725c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uYWJsZSUyMHNuZWFrZXJzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzA5OTIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Running',
    description: 'Flexible running shoes with dynamic support. Features adaptive fit technology for maximum comfort.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Multi', 'Black', 'White'],
    rating: 4.7,
    reviews: 145
  },
  {
    id: '8',
    name: 'Premium Dress Shoe',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lJTIwc3RvcmV8ZW58MXx8fHwxNzcwOTkyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal',
    description: 'Elegant formal shoes crafted from premium leather. Perfect for business meetings and special occasions.',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Black', 'Brown'],
    rating: 4.8,
    reviews: 98
  }
];
