
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedProducts, getNewArrivals, getPopularProducts } from "@/data/products";
import { Smartphone, Headphones, ArrowRight } from "lucide-react";

export default function Index() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const popularProducts = getPopularProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-orange">
                    Latest Tech at Your Fingertips
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    Discover premium smartphones and earbuds from top brands at unbeatable prices. Free shipping on all orders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/smartphones">
                    <Button className="gap-2">
                      <Smartphone className="h-4 w-4" /> Explore Smartphones
                    </Button>
                  </Link>
                  <Link to="/earbuds">
                    <Button variant="outline" className="gap-2">
                      <Headphones className="h-4 w-4" /> Browse Earbuds
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <img
                    src="/placeholder.svg"
                    alt="Featured Devices"
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Featured Products
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our handpicked selection of premium gadgets
                </p>
              </div>
              <Link to="/products">
                <Button variant="ghost" className="gap-2">
                  View all products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 bg-slate-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl text-center mb-8">
              Shop By Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/smartphones" className="group relative overflow-hidden rounded-xl bg-gray-900">
                <img
                  src="/placeholder.svg"
                  alt="Smartphones"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Smartphones</h3>
                  <p className="text-gray-200 mb-4">
                    Latest models from Samsung, Realme, OPPO, Tecno, and ASUS ROG
                  </p>
                  <Button className="w-fit">Shop Smartphones</Button>
                </div>
              </Link>
              <Link to="/earbuds" className="group relative overflow-hidden rounded-xl bg-gray-900">
                <img
                  src="/placeholder.svg"
                  alt="Earbuds"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Earbuds</h3>
                  <p className="text-gray-200 mb-4">
                    Premium audio from JBL, boAt, Realme, Apple and more
                  </p>
                  <Button className="w-fit">Shop Earbuds</Button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  New Arrivals
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The latest tech just landed in our store
                </p>
              </div>
              <Link to="/new-arrivals">
                <Button variant="ghost" className="gap-2">
                  View all <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {newArrivals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="w-full py-12 md:py-16 bg-slate-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Popular Products
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  What our customers are loving right now
                </p>
              </div>
              <Link to="/popular">
                <Button variant="ghost" className="gap-2">
                  View all <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {popularProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-gradient-to-r from-brand-purple/20 via-purple-50 to-brand-orange/20 dark:from-brand-purple/10 dark:via-gray-900 dark:to-brand-orange/10 p-8 md:p-12">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                    Subscribe to our newsletter
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Get the latest updates, deals, and exclusive offers directly to your inbox.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:justify-end">
                  <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                    <input
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <Button className="sm:w-auto">Subscribe</Button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By subscribing, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
