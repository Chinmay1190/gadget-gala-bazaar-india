
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "smartphone" | "earbuds";
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  rating: number;
  stock: number;
  isNewArrival?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  // Smartphones - Realme
  {
    id: "realme-gt-neo-3",
    name: "Realme GT Neo 3",
    brand: "Realme",
    category: "smartphone",
    price: 36999,
    originalPrice: 40999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Realme GT Neo 3 with 80W SuperDart Charge, MediaTek Dimensity 8100, 120Hz AMOLED Display and 5000 mAh Battery.",
    features: [
      "150W UltraDart Charge",
      "MediaTek Dimensity 8100",
      "120Hz AMOLED Display",
      "50MP Sony IMX766 OIS Camera",
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 8100",
      "RAM": "8GB LPDDR5",
      "Storage": "128GB UFS 3.1",
      "Display": "6.7 inch 120Hz AMOLED",
      "Battery": "5000 mAh",
      "OS": "Realme UI 3.0 based on Android 12"
    },
    rating: 4.5,
    stock: 15,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "realme-narzo-60-pro",
    name: "Realme Narzo 60 Pro",
    brand: "Realme",
    category: "smartphone",
    price: 24999,
    originalPrice: 27999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Realme Narzo 60 Pro with Dimensity 7050, 120Hz Curved AMOLED Display and 67W Fast Charging.",
    features: [
      "67W SUPERVOOC Charge",
      "Dimensity 7050 5G Processor",
      "120Hz Curved AMOLED Display",
      "100MP OIS Camera"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 7050",
      "RAM": "8GB LPDDR4X",
      "Storage": "128GB UFS 2.2",
      "Display": "6.7 inch 120Hz Curved AMOLED",
      "Battery": "5000 mAh",
      "OS": "Realme UI 4.0 based on Android 13"
    },
    rating: 4.3,
    stock: 25,
    isPopular: true
  },
  {
    id: "realme-11-pro-plus",
    name: "Realme 11 Pro+",
    brand: "Realme",
    category: "smartphone",
    price: 29999,
    originalPrice: 32999,
    images: [
      "/placeholder.svg"
    ],
    description: "Realme 11 Pro+ with 200MP SuperZoom OIS Camera, 120Hz Curved AMOLED Display and 100W Fast Charging.",
    features: [
      "200MP SuperZoom OIS Camera",
      "100W SUPERVOOC Fast Charging",
      "120Hz Curved AMOLED Display",
      "MediaTek Dimensity 7050"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 7050",
      "RAM": "12GB LPDDR4X",
      "Storage": "256GB UFS 3.1",
      "Display": "6.7 inch 120Hz Curved AMOLED",
      "Battery": "5000 mAh",
      "OS": "Realme UI 4.0 based on Android 13"
    },
    rating: 4.6,
    stock: 10,
    isNewArrival: true
  },
  
  // Smartphones - Samsung
  {
    id: "samsung-galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "smartphone",
    price: 124999,
    originalPrice: 134999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Samsung Galaxy S23 Ultra with Snapdragon 8 Gen 2, 200MP Camera, S Pen and 5000mAh Battery.",
    features: [
      "200MP Wide Camera",
      "Snapdragon 8 Gen 2 for Galaxy",
      "Built-in S Pen",
      "5000mAh Battery with 45W Fast Charging"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 2 for Galaxy",
      "RAM": "12GB LPDDR5X",
      "Storage": "256GB UFS 4.0",
      "Display": "6.8 inch QHD+ Dynamic AMOLED 2X, 120Hz",
      "Battery": "5000 mAh",
      "OS": "One UI 5.1 based on Android 13"
    },
    rating: 4.8,
    stock: 8,
    isFeatured: true
  },
  {
    id: "samsung-galaxy-a54",
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    category: "smartphone",
    price: 38999,
    originalPrice: 40999,
    images: [
      "/placeholder.svg"
    ],
    description: "Samsung Galaxy A54 with Exynos 1380, 50MP OIS Camera, 120Hz Super AMOLED Display and IP67 Rating.",
    features: [
      "50MP OIS Camera",
      "Exynos 1380 Processor",
      "120Hz Super AMOLED Display",
      "IP67 Water & Dust Resistant"
    ],
    specifications: {
      "Processor": "Exynos 1380",
      "RAM": "8GB LPDDR4X",
      "Storage": "128GB",
      "Display": "6.4 inch FHD+ Super AMOLED, 120Hz",
      "Battery": "5000 mAh with 25W Fast Charging",
      "OS": "One UI 5.1 based on Android 13"
    },
    rating: 4.4,
    stock: 20,
    isPopular: true
  },
  {
    id: "samsung-galaxy-m34",
    name: "Samsung Galaxy M34",
    brand: "Samsung",
    category: "smartphone",
    price: 18999,
    originalPrice: 21999,
    images: [
      "/placeholder.svg"
    ],
    description: "Samsung Galaxy M34 with Exynos 1280, 50MP Triple Camera, 120Hz sAMOLED Display and 6000mAh Battery.",
    features: [
      "6000mAh Massive Battery",
      "Exynos 1280 Processor",
      "120Hz sAMOLED Display",
      "50MP Triple Camera"
    ],
    specifications: {
      "Processor": "Exynos 1280",
      "RAM": "6GB LPDDR4X",
      "Storage": "128GB",
      "Display": "6.5 inch FHD+ sAMOLED, 120Hz",
      "Battery": "6000 mAh with 25W Fast Charging",
      "OS": "One UI 5.1 based on Android 13"
    },
    rating: 4.2,
    stock: 35,
    isPopular: true
  },
  
  // Smartphones - Oppo
  {
    id: "oppo-reno10-pro",
    name: "OPPO Reno10 Pro",
    brand: "OPPO",
    category: "smartphone",
    price: 39999,
    originalPrice: 42999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "OPPO Reno10 Pro with Snapdragon 778G, 50MP Sony IMX890 Camera and 80W SUPERVOOC Charging.",
    features: [
      "50MP Sony IMX890 Camera",
      "80W SUPERVOOC Flash Charge",
      "Snapdragon 778G Processor",
      "120Hz 3D Curved AMOLED Display"
    ],
    specifications: {
      "Processor": "Qualcomm Snapdragon 778G",
      "RAM": "12GB LPDDR4X",
      "Storage": "256GB UFS 3.1",
      "Display": "6.7 inch FHD+ 3D Curved AMOLED, 120Hz",
      "Battery": "4600 mAh with 80W SUPERVOOC",
      "OS": "ColorOS 13 based on Android 13"
    },
    rating: 4.5,
    stock: 12,
    isNewArrival: true
  },
  {
    id: "oppo-f23",
    name: "OPPO F23",
    brand: "OPPO",
    category: "smartphone",
    price: 24999,
    originalPrice: 27999,
    images: [
      "/placeholder.svg"
    ],
    description: "OPPO F23 with Snapdragon 695, 64MP AI Camera and 67W SUPERVOOC Flash Charge.",
    features: [
      "67W SUPERVOOC Flash Charge",
      "Snapdragon 695 5G Processor",
      "64MP AI Camera",
      "120Hz FHD+ AMOLED Display"
    ],
    specifications: {
      "Processor": "Qualcomm Snapdragon 695",
      "RAM": "8GB LPDDR4X",
      "Storage": "128GB UFS 2.2",
      "Display": "6.7 inch FHD+ AMOLED, 120Hz",
      "Battery": "5000 mAh with 67W SUPERVOOC",
      "OS": "ColorOS 13 based on Android 13"
    },
    rating: 4.1,
    stock: 18
  },
  
  // Smartphones - Tecno
  {
    id: "tecno-phantom-v-fold",
    name: "Tecno Phantom V Fold",
    brand: "Tecno",
    category: "smartphone",
    price: 89999,
    originalPrice: 99999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Tecno Phantom V Fold with MediaTek Dimensity 9000+, 7.85-inch 120Hz AMOLED Foldable Display and 50MP Triple Camera.",
    features: [
      "7.85-inch Foldable AMOLED Display",
      "MediaTek Dimensity 9000+",
      "50MP Triple Camera",
      "4G LTE + 5G Dual SIM"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 9000+",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Display": "7.85-inch Foldable AMOLED, 120Hz",
      "Secondary Display": "6.42-inch AMOLED, 120Hz",
      "Battery": "5000 mAh with 45W Fast Charging",
      "OS": "HiOS 13 Fold based on Android 13"
    },
    rating: 4.3,
    stock: 5,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "tecno-camon-20-premier",
    name: "Tecno Camon 20 Premier",
    brand: "Tecno",
    category: "smartphone",
    price: 29999,
    originalPrice: 32999,
    images: [
      "/placeholder.svg"
    ],
    description: "Tecno Camon 20 Premier with MediaTek Dimensity 8050, 50MP RGBW Camera, 120Hz AMOLED Display and 5000mAh Battery.",
    features: [
      "50MP RGBW Camera with OIS",
      "MediaTek Dimensity 8050",
      "120Hz Curved AMOLED Display",
      "45W Fast Charging"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 8050",
      "RAM": "8GB LPDDR4X",
      "Storage": "256GB UFS 3.1",
      "Display": "6.7 inch FHD+ AMOLED, 120Hz",
      "Battery": "5000 mAh with 45W Fast Charging",
      "OS": "HiOS 13 based on Android 13"
    },
    rating: 4.0,
    stock: 15
  },
  
  // Smartphones - ASUS ROG
  {
    id: "asus-rog-phone-7",
    name: "ASUS ROG Phone 7",
    brand: "ASUS",
    category: "smartphone",
    price: 74999,
    originalPrice: 79999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "ASUS ROG Phone 7 with Snapdragon 8 Gen 2, 165Hz AMOLED Display, 6000mAh Battery and GameCool 7 Cooling System.",
    features: [
      "Snapdragon 8 Gen 2 for Gaming",
      "165Hz AMOLED Display",
      "GameCool 7 Advanced Cooling",
      "Dual Front-Facing Speakers"
    ],
    specifications: {
      "Processor": "Qualcomm Snapdragon 8 Gen 2",
      "RAM": "16GB LPDDR5X",
      "Storage": "512GB UFS 4.0",
      "Display": "6.78 inch FHD+ AMOLED, 165Hz",
      "Battery": "6000 mAh with 65W Fast Charging",
      "OS": "ROG UI based on Android 13"
    },
    rating: 4.8,
    stock: 8,
    isFeatured: true
  },
  {
    id: "asus-rog-phone-6",
    name: "ASUS ROG Phone 6",
    brand: "ASUS",
    category: "smartphone",
    price: 59999,
    originalPrice: 69999,
    images: [
      "/placeholder.svg"
    ],
    description: "ASUS ROG Phone 6 with Snapdragon 8+ Gen 1, 165Hz AMOLED Display and 6000mAh Battery.",
    features: [
      "Snapdragon 8+ Gen 1",
      "165Hz AMOLED Display",
      "GameCool 6 Cooling System",
      "AirTrigger 6 Controls"
    ],
    specifications: {
      "Processor": "Qualcomm Snapdragon 8+ Gen 1",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Display": "6.78 inch FHD+ AMOLED, 165Hz",
      "Battery": "6000 mAh with 65W Fast Charging",
      "OS": "ROG UI based on Android 12"
    },
    rating: 4.7,
    stock: 10,
    isPopular: true
  },
  
  // Earbuds - JBL
  {
    id: "jbl-live-pro-2-tws",
    name: "JBL Live Pro 2 TWS",
    brand: "JBL",
    category: "earbuds",
    price: 13999,
    originalPrice: 15999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "JBL Live Pro 2 True Wireless Earbuds with Active Noise Cancellation, 40 Hours Battery Life and Adaptive Ambient Aware.",
    features: [
      "True Adaptive Noise Cancelling",
      "40 Hours Battery Life",
      "Smart Ambient Technology",
      "6 Microphones for Clear Calls"
    ],
    specifications: {
      "Driver Size": "11mm Dynamic Driver",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "10 Hours (Earbuds) + 30 Hours (Case)",
      "Charging": "Wireless Qi Compatible, USB-C",
      "Water Resistance": "IPX5",
      "Noise Cancellation": "True Adaptive ANC"
    },
    rating: 4.6,
    stock: 25,
    isPopular: true,
    isFeatured: true
  },
  {
    id: "jbl-tune-235nc-tws",
    name: "JBL Tune 235NC TWS",
    brand: "JBL",
    category: "earbuds",
    price: 5999,
    originalPrice: 7999,
    images: [
      "/placeholder.svg"
    ],
    description: "JBL Tune 235NC True Wireless Earbuds with Active Noise Cancellation, 40 Hours Battery Life and JBL Pure Bass Sound.",
    features: [
      "Active Noise Cancellation",
      "JBL Pure Bass Sound",
      "40 Hours Battery Life",
      "Speed Charging"
    ],
    specifications: {
      "Driver Size": "6mm Dynamic Driver",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "8 Hours (Earbuds) + 32 Hours (Case)",
      "Charging": "USB-C",
      "Water Resistance": "IPX4",
      "Noise Cancellation": "Active Noise Cancellation"
    },
    rating: 4.3,
    stock: 30
  },
  
  // Earbuds - boAt
  {
    id: "boat-airdopes-500-anc",
    name: "boAt Airdopes 500 ANC",
    brand: "boAt",
    category: "earbuds",
    price: 3999,
    originalPrice: 4999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "boAt Airdopes 500 ANC with Hybrid Active Noise Cancellation, 35 Hours Playback and BEAST Mode for Gaming.",
    features: [
      "Hybrid Active Noise Cancellation",
      "35 Hours Total Playback",
      "BEAST Mode for Gaming",
      "Quad Mic ENx Technology"
    ],
    specifications: {
      "Driver Size": "10mm Driver",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "8 Hours (Earbuds) + 27 Hours (Case)",
      "Charging": "USB Type-C",
      "Water Resistance": "IPX4",
      "Noise Cancellation": "Hybrid ANC up to 35dB"
    },
    rating: 4.4,
    stock: 40,
    isPopular: true
  },
  {
    id: "boat-nirvana-ion",
    name: "boAt Nirvana Ion",
    brand: "boAt",
    category: "earbuds",
    price: 6999,
    originalPrice: 7999,
    images: [
      "/placeholder.svg"
    ],
    description: "boAt Nirvana Ion with Crystal Bionic Sound, Hybrid ANC, 120 Hours Playback and Crystal Calling with Quad Mics.",
    features: [
      "Crystal Bionic Sound",
      "Hybrid Active Noise Cancellation",
      "120 Hours Total Playback",
      "Crystal Clear Calling with Quad Mics"
    ],
    specifications: {
      "Driver Size": "12mm Titanium Drivers",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "12 Hours (Earbuds) + 108 Hours (Case)",
      "Charging": "USB Type-C, Fast Charging",
      "Water Resistance": "IPX5",
      "Noise Cancellation": "Hybrid ANC up to 40dB"
    },
    rating: 4.7,
    stock: 15,
    isNewArrival: true
  },
  
  // Earbuds - Realme
  {
    id: "realme-buds-air-5-pro",
    name: "Realme Buds Air 5 Pro",
    brand: "Realme",
    category: "earbuds",
    price: 4999,
    originalPrice: 5999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Realme Buds Air 5 Pro with 50dB Active Noise Cancellation, 11mm Bass Driver + 6mm Micro Planar Tweeter and 40 Hours Playback.",
    features: [
      "50dB Active Noise Cancellation",
      "Dual Drivers: 11mm Bass + 6mm Tweeter",
      "40 Hours Total Playback",
      "Spatial Audio Effect"
    ],
    specifications: {
      "Driver": "11mm Bass Driver + 6mm Micro Planar Tweeter",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "11 Hours (Earbuds) + 29 Hours (Case)",
      "Charging": "USB Type-C, Fast Charging",
      "Water Resistance": "IP55",
      "Noise Cancellation": "50dB Multi-level ANC"
    },
    rating: 4.5,
    stock: 20,
    isNewArrival: true
  },
  {
    id: "realme-buds-air-3",
    name: "Realme Buds Air 3",
    brand: "Realme",
    category: "earbuds",
    price: 3499,
    originalPrice: 3999,
    images: [
      "/placeholder.svg"
    ],
    description: "Realme Buds Air 3 with 42dB Active Noise Cancellation, 10mm Bass Boost Driver and 30 Hours Playback.",
    features: [
      "42dB Active Noise Cancellation",
      "10mm Bass Boost Driver",
      "30 Hours Total Playback",
      "Dolby Audio Support"
    ],
    specifications: {
      "Driver Size": "10mm Bass Boost Driver",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "7 Hours (Earbuds) + 23 Hours (Case)",
      "Charging": "USB Type-C",
      "Water Resistance": "IPX5",
      "Noise Cancellation": "42dB ANC"
    },
    rating: 4.2,
    stock: 25
  },
  
  // Earbuds - Apple
  {
    id: "apple-airpods-pro-2",
    name: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",
    category: "earbuds",
    price: 26900,
    originalPrice: 29900,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Apple AirPods Pro (2nd Generation) with Active Noise Cancellation, Transparency Mode, Spatial Audio and Adaptive EQ.",
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "Spatial Audio with Dynamic Head Tracking",
      "Adaptive EQ"
    ],
    specifications: {
      "Chip": "Apple H2 Headphone Chip",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "6 Hours (Earbuds) + 30 Hours (Case)",
      "Charging": "Lightning, MagSafe, Qi Wireless",
      "Water Resistance": "IPX4",
      "Noise Cancellation": "Active Noise Cancellation"
    },
    rating: 4.8,
    stock: 10,
    isFeatured: true
  },
  {
    id: "apple-airpods-3",
    name: "Apple AirPods (3rd Generation)",
    brand: "Apple",
    category: "earbuds",
    price: 19900,
    originalPrice: 21900,
    images: [
      "/placeholder.svg"
    ],
    description: "Apple AirPods (3rd Generation) with Spatial Audio, Adaptive EQ, Force Sensor and Sweat & Water Resistance.",
    features: [
      "Spatial Audio with Dynamic Head Tracking",
      "Adaptive EQ",
      "Force Sensor",
      "Sweat & Water Resistant"
    ],
    specifications: {
      "Chip": "Apple H1 Headphone Chip",
      "Connectivity": "Bluetooth 5.0",
      "Battery Life": "6 Hours (Earbuds) + 30 Hours (Case)",
      "Charging": "Lightning, MagSafe, Qi Wireless",
      "Water Resistance": "IPX4",
      "Noise Cancellation": "No"
    },
    rating: 4.6,
    stock: 15,
    isPopular: true
  },
  
  // Additional popular smartphones
  {
    id: "oppo-find-n3-flip",
    name: "OPPO Find N3 Flip",
    brand: "OPPO",
    category: "smartphone",
    price: 94999,
    originalPrice: 99999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "OPPO Find N3 Flip with Hasselblad Camera, MediaTek Dimensity 9200, 6.8-inch AMOLED Foldable Display and 44W SUPERVOOC Charging.",
    features: [
      "Hasselblad Camera System",
      "MediaTek Dimensity 9200",
      "6.8-inch Foldable AMOLED Display",
      "4300mAh Battery with 44W SUPERVOOC"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 9200",
      "RAM": "12GB LPDDR5X",
      "Storage": "256GB UFS 4.0",
      "Main Display": "6.8-inch AMOLED, 120Hz",
      "Cover Display": "3.26-inch AMOLED",
      "Battery": "4300 mAh with 44W SUPERVOOC",
      "OS": "ColorOS 13.2 based on Android 13"
    },
    rating: 4.7,
    stock: 7,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "realme-11-5g",
    name: "Realme 11 5G",
    brand: "Realme",
    category: "smartphone",
    price: 18999,
    originalPrice: 19999,
    images: [
      "/placeholder.svg"
    ],
    description: "Realme 11 5G with MediaTek Dimensity 6100+, 108MP Camera and 67W SUPERVOOC Charge.",
    features: [
      "108MP ProLight Camera",
      "67W SUPERVOOC Charge",
      "MediaTek Dimensity 6100+",
      "120Hz Ultra Smooth Display"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 6100+",
      "RAM": "8GB LPDDR4X",
      "Storage": "128GB UFS 2.2",
      "Display": "6.72 inch FHD+, 120Hz",
      "Battery": "5000 mAh with 67W SUPERVOOC",
      "OS": "Realme UI 4.0 based on Android 13"
    },
    rating: 4.2,
    stock: 30
  },

  // Additional earbuds
  {
    id: "nothing-ear-2",
    name: "Nothing Ear (2)",
    brand: "Nothing",
    category: "earbuds",
    price: 9999,
    originalPrice: 11999,
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Nothing Ear (2) with Hi-Res Audio, Smart ANC, Dual Connection and Personalized Sound Profile.",
    features: [
      "Hi-Res Audio Certified",
      "Smart ANC with Personalization",
      "Custom 11.6mm Driver",
      "Dual Connection"
    ],
    specifications: {
      "Driver Size": "11.6mm Custom Driver",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "6.3 Hours (Earbuds) + 36 Hours (Case)",
      "Charging": "USB-C, Wireless Qi",
      "Water Resistance": "IP54",
      "Noise Cancellation": "Smart ANC up to 40dB"
    },
    rating: 4.5,
    stock: 18,
    isNewArrival: true
  },
  {
    id: "oneplus-nord-buds-2",
    name: "OnePlus Nord Buds 2",
    brand: "OnePlus",
    category: "earbuds",
    price: 2999,
    originalPrice: 3999,
    images: [
      "/placeholder.svg"
    ],
    description: "OnePlus Nord Buds 2 with Active Noise Cancellation, 12.4mm Titanium Drivers and 36 Hours Battery Life.",
    features: [
      "Active Noise Cancellation",
      "12.4mm Titanium Drivers",
      "36 Hours Battery Life",
      "IP55 Water & Dust Resistant"
    ],
    specifications: {
      "Driver Size": "12.4mm Titanium Drivers",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "7 Hours (Earbuds) + 29 Hours (Case)",
      "Charging": "USB-C",
      "Water Resistance": "IP55",
      "Noise Cancellation": "Active Noise Cancellation up to 25dB"
    },
    rating: 4.3,
    stock: 35,
    isPopular: true
  }
];

export function getProductsByCategory(category: "smartphone" | "earbuds"): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured);
}

export function getNewArrivals(): Product[] {
  return products.filter(product => product.isNewArrival);
}

export function getPopularProducts(): Product[] {
  return products.filter(product => product.isPopular);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
}

export function getSmartphoneBrands(): string[] {
  const brands = new Set<string>();
  
  products.forEach(product => {
    if (product.category === "smartphone") {
      brands.add(product.brand);
    }
  });
  
  return Array.from(brands);
}

export function getEarbudsBrands(): string[] {
  const brands = new Set<string>();
  
  products.forEach(product => {
    if (product.category === "earbuds") {
      brands.add(product.brand);
    }
  });
  
  return Array.from(brands);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
