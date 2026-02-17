import { Button } from './ui/button';
import { SlidersHorizontal } from 'lucide-react';

interface FilterSidebarProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    priceRange: string;
    setPriceRange: (range: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    onReset: () => void;
}

export function FilterSidebar({
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    onReset,
}: FilterSidebarProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                </h3>
            </div>

            {/* Category Filter */}
            <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                    {[
                        { label: 'All Prices', value: 'all' },
                        { label: 'Under $100', value: '0-100' },
                        { label: '$100 - $150', value: '100-150' },
                        { label: '$150 - $200', value: '150-200' },
                        { label: 'Over $200', value: '200-999999' },
                    ].map((range) => (
                        <button
                            key={range.value}
                            onClick={() => setPriceRange(range.value)}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${priceRange === range.value
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-100'
                                }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sort By */}
            <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                </select>
            </div>

            {/* Reset Filters */}
            <Button
                variant="outline"
                className="w-full"
                onClick={onReset}
            >
                Reset Filters
            </Button>
        </div>
    );
}
