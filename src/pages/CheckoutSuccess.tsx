
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function CheckoutSuccess() {
  const orderNumber = `GG${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <div className="text-sm text-muted-foreground mb-2">
              Order Number
            </div>
            <div className="text-xl font-bold">
              {orderNumber}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We have sent a confirmation email with order details and tracking information.
            </p>
          </div>
          
          <div className="space-y-2">
            <Link to="/orders">
              <Button variant="outline" className="w-full sm:w-auto">
                View Order
              </Button>
            </Link>
            <Link to="/">
              <Button className="w-full sm:w-auto sm:ml-4">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
