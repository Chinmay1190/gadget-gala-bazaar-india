
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
                Gadget Gala
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Your one-stop shop for premium smartphones and earbuds at the best prices in India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Products</h3>
            <div className="flex flex-col items-start mt-4 space-y-2">
              <Link to="/smartphones" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Smartphones
              </Link>
              <Link to="/smartphones?brand=Samsung" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Samsung Phones
              </Link>
              <Link to="/smartphones?brand=Realme" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Realme Phones
              </Link>
              <Link to="/earbuds" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Earbuds
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Support</h3>
            <div className="flex flex-col items-start mt-4 space-y-2">
              <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                FAQs
              </Link>
              <Link to="/shipping" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Returns Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Contact</h3>
            <div className="flex flex-col items-start mt-4 space-y-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Email: support@gadgetgala.in
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Phone: +91 9876543210
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Address: 123 Tech Lane, Bangalore, India
              </span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © {new Date().getFullYear()} Gadget Gala. All Rights Reserved.
          </p>
          <div className="flex mt-3 space-x-4 sm:mt-0">
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
