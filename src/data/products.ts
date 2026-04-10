import productKitchen1 from "@/assets/product-kitchen-1.jpg";
import productKitchen2 from "@/assets/product-kitchen-2.jpg";
import productKitchen3 from "@/assets/product-kitchen-3.jpg";
import productBathroom1 from "@/assets/product-bathroom-1.jpg";
import productAppliance1 from "@/assets/product-appliance-1.jpg";
import productHome1 from "@/assets/product-home-1.jpg";
import categoryKitchen from "@/assets/category-kitchen.jpg";
import categoryBathroom from "@/assets/category-bathroom.jpg";
import categoryAppliances from "@/assets/category-appliances.jpg";
import categoryGarden from "@/assets/category-garden.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  category: "kitchens" | "bathrooms" | "appliances" | "home-garden";
  type: string;
  condition: "Ex Display" | "Approved Used" | "New";
  location: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "k1",
    name: "Neptune Chichester Kitchen",
    brand: "Neptune",
    price: 8500,
    originalPrice: 35000,
    image: productKitchen1,
    category: "kitchens",
    type: "Shaker",
    condition: "Approved Used",
    location: "Surrey",
    description: "A stunning Neptune Chichester kitchen in Snow white with marble worktops, Belfast sink, and brass hardware. Complete with island unit and all cabinets.",
    features: ["Island Unit", "Belfast Sink", "Marble Worktop", "Brass Hardware", "Soft Close Drawers"],
  },
  {
    id: "k2",
    name: "Tom Howley Hartford Kitchen",
    brand: "Tom Howley",
    price: 12000,
    originalPrice: 48000,
    image: productKitchen2,
    category: "kitchens",
    type: "Modern",
    condition: "Ex Display",
    location: "Cheshire",
    description: "Exquisite Tom Howley Hartford kitchen in midnight blue with quartz worktops and integrated Miele appliances.",
    features: ["Quartz Worktop", "Miele Appliances", "Wine Cooler", "Integrated Lighting"],
  },
  {
    id: "k3",
    name: "Chalon Farmhouse Kitchen",
    brand: "Chalon",
    price: 4200,
    originalPrice: 22000,
    image: productKitchen3,
    category: "kitchens",
    type: "Shaker",
    condition: "Approved Used",
    location: "Cotswolds",
    description: "A beautifully warm Chalon farmhouse kitchen in solid oak with Aga range cooker and granite worktops.",
    features: ["Solid Oak", "Aga Range Cooker", "Belfast Sink", "Granite Worktop"],
  },
  {
    id: "k4",
    name: "Harvey Jones Linear Kitchen",
    brand: "Harvey Jones",
    price: 6800,
    originalPrice: 28000,
    image: categoryKitchen,
    category: "kitchens",
    type: "Modern",
    condition: "Ex Display",
    location: "London",
    description: "Sleek Harvey Jones Linear kitchen in dove grey with Silestone worktops and Siemens appliances.",
    features: ["Silestone Worktop", "Siemens Appliances", "Handle-less Design", "LED Lighting"],
  },
  {
    id: "k5",
    name: "Howdens Shaker Kitchen",
    brand: "Howdens",
    price: 2800,
    originalPrice: 9500,
    image: productKitchen1,
    category: "kitchens",
    type: "Shaker",
    condition: "Approved Used",
    location: "Manchester",
    description: "A practical Howdens shaker kitchen in cream with laminate worktops, complete with all units and sink.",
    features: ["Soft Close Doors", "Laminate Worktop", "Under Cabinet Lighting"],
  },
  {
    id: "k6",
    name: "SieMatic Pure Kitchen",
    brand: "SieMatic",
    price: 18500,
    originalPrice: 65000,
    image: productKitchen2,
    category: "kitchens",
    type: "Modern",
    condition: "Ex Display",
    location: "Bath",
    description: "Ultra-premium SieMatic Pure kitchen with handle-less design, Gaggenau appliances, and Dekton worktops.",
    features: ["Gaggenau Appliances", "Dekton Worktop", "Handle-less", "Island", "Wine Storage"],
  },
  // Bathrooms
  {
    id: "b1",
    name: "Victoria + Albert Bathroom Suite",
    brand: "Victoria + Albert",
    price: 3200,
    originalPrice: 12000,
    image: productBathroom1,
    category: "bathrooms",
    type: "Suite",
    condition: "Ex Display",
    location: "London",
    description: "Complete Victoria + Albert bathroom suite with freestanding bath, basin, and walk-in shower enclosure.",
    features: ["Freestanding Bath", "Walk-in Shower", "Chrome Fittings"],
  },
  {
    id: "b2",
    name: "Duravit Modern Bathroom",
    brand: "Duravit",
    price: 2100,
    originalPrice: 8500,
    image: categoryBathroom,
    category: "bathrooms",
    type: "Suite",
    condition: "Ex Display",
    location: "Birmingham",
    description: "A contemporary Duravit bathroom suite with wall-hung vanity, back-to-wall toilet, and LED mirror.",
    features: ["Wall-hung Vanity", "LED Mirror", "Back-to-Wall Toilet", "Chrome Taps"],
  },
  {
    id: "b3",
    name: "Burlington Traditional Suite",
    brand: "Burlington",
    price: 1800,
    originalPrice: 6500,
    image: productBathroom1,
    category: "bathrooms",
    type: "Suite",
    condition: "Approved Used",
    location: "Edinburgh",
    description: "A classic Burlington traditional bathroom with roll-top bath, high-level cistern, and basin.",
    features: ["Roll-Top Bath", "High-Level Cistern", "Pedestal Basin"],
  },
  // Appliances
  {
    id: "a1",
    name: "Miele Built-in Oven H7464BP",
    brand: "Miele",
    price: 1200,
    originalPrice: 3200,
    image: productAppliance1,
    category: "appliances",
    type: "Oven",
    condition: "Ex Display",
    location: "Hampshire",
    description: "A premium Miele built-in oven with pyrolytic cleaning and wireless food probe.",
    features: ["Pyrolytic Cleaning", "Wireless Probe", "Touch Display", "A+ Energy Rating"],
  },
  {
    id: "a2",
    name: "Gaggenau Vario Hob",
    brand: "Gaggenau",
    price: 1800,
    originalPrice: 4500,
    image: categoryAppliances,
    category: "appliances",
    type: "Hob",
    condition: "Ex Display",
    location: "London",
    description: "Gaggenau 400 series flex induction hob with full surface induction technology.",
    features: ["Full Surface Induction", "TFT Display", "Timer", "Power Boost"],
  },
  {
    id: "a3",
    name: "Quooker Flex Tap",
    brand: "Quooker",
    price: 650,
    originalPrice: 1500,
    image: productAppliance1,
    category: "appliances",
    type: "Tap",
    condition: "New",
    location: "Nationwide",
    description: "Quooker Flex boiling water tap in polished chrome with pull-out hose.",
    features: ["Boiling Water", "Pull-out Hose", "COLD Water Filter", "Childproof"],
  },
  // Home & Garden
  {
    id: "h1",
    name: "Neptune Chichester Dresser",
    brand: "Neptune",
    price: 1400,
    originalPrice: 4200,
    image: productHome1,
    category: "home-garden",
    type: "Dresser",
    condition: "Approved Used",
    location: "Devon",
    description: "A beautiful Neptune Chichester dresser in honed slate with adjustable shelving and oak internals.",
    features: ["Solid Oak Internals", "Adjustable Shelves", "Dovetail Drawers"],
  },
  {
    id: "h2",
    name: "Tom Howley Utility Room",
    brand: "Tom Howley",
    price: 3800,
    originalPrice: 15000,
    image: categoryGarden,
    category: "home-garden",
    type: "Utility Room",
    condition: "Ex Display",
    location: "Yorkshire",
    description: "Tom Howley utility room with bespoke cabinetry, granite worktop, and Belfast sink.",
    features: ["Belfast Sink", "Granite Worktop", "Bespoke Cabinetry"],
  },
  {
    id: "h3",
    name: "Clive Christian Library",
    brand: "Clive Christian",
    price: 8500,
    originalPrice: 35000,
    image: productHome1,
    category: "home-garden",
    type: "Office",
    condition: "Approved Used",
    location: "Kensington",
    description: "An exceptional Clive Christian library/study room in Victorian mahogany with built-in bookshelves.",
    features: ["Victorian Mahogany", "Built-in Shelves", "Partner Desk", "Filing Drawers"],
  },
];

export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);

export const getProductById = (id: string) => products.find((p) => p.id === id);
