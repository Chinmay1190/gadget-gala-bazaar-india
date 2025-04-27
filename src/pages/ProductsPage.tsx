
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { 
  getProductsByCategory, 
  getProductsByBrand, 
  getSmartphoneBrands, 
  getEarbudsBrands 
} from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Product } from "@/data/products";
import { X } from "lucide-react";
import { formatPrice } from "@/data/products";

interface ProductsPageProps {
  category: "smartphone" | "earbuds";
}

export default function ProductsPage({ category }: ProductsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("featured");
  
  const brandParam = searchParams.get("brand") || "";
  const pageTitle = category === "smartphone" ? "Smartphones" : "Earbuds";

  useEffect(() => {
    // Get products based on category
    const categoryProducts = getProductsByCategory(category);
    setProducts(categoryProducts);
    
    // Get min and max prices
    const prices = categoryProducts.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    setPriceRange([minPrice, maxPrice]);
    
    // Get brands based on category
    const categoryBrands = category === "smartphone" 
      ? getSmartphoneBrands() 
      : getEarbudsBrands();
    setBrands(categoryBrands);
    
    // Set brand from URL parameter if it exists
    if (brandParam && categoryBrands.includes(brandParam)) {
      setSelectedBrand(brandParam);
    }
  }, [category, brandParam]);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by brand if selected
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch(sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Since we don't have date in our data, we'll use isNewArrival as a proxy
        result.sort((a, b) => {
          if (a.isNewArrival && !b.isNewArrival) return -1;
          if (!a.isNewArrival && b.isNewArrival) return 1;
          return 0;
        });
        break;
      case "popular":
        // Sort by popularity (using rating as a proxy)
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Featured items first
        result.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(result);
  }, [products, selectedBrand, priceRange, sortOption]);

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    if (value) {
      searchParams.set("brand", value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("brand");
      setSearchParams(searchParams);
    }
  };
  
  const handleClearFilters = () => {
    setSelectedBrand("");
    setPriceRange([Math.min(...products.map(p => p.price)), Math.max(...products.map(p => p.price))]);
    setSortOption("featured");
    setSearchParams({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 bg-card rounded-lg p-4 sticky top-20 self-start">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 gap-1 text-xs"
                onClick={handleClearFilters}
              >
                <X className="h-3 w-3" /> Clear
              </Button>
            </div>
            
            {/* Brand filter */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Brand</label>
              <Select
                value={selectedBrand}
                onValueChange={handleBrandChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All brands</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Price range filter */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Price Range</label>
              <Slider
                defaultValue={priceRange}
                min={Math.min(...products.map(p => p.price))}
                max={Math.max(...products.map(p => p.price))}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
            
            {/* Sort options */}
            <div>
              <label className="text-sm font-medium mb-2 block">Sort by</label>
              <Select
                value={sortOption}
                onValueChange={(value) => setSortOption(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{pageTitle}</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-xl font-semibold mb-2">No products found</p>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or browse all products
                </p>
                <Button onClick={handleClearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
