import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import Kitchens from "./pages/Kitchens.tsx";
import Bathrooms from "./pages/Bathrooms.tsx";
import Appliances from "./pages/Appliances.tsx";
import HomeGarden from "./pages/HomeGarden.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import SomethingToSell from "./pages/SomethingToSell.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Cart from "./pages/Cart.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import CustomerStories from "./pages/CustomerStories.tsx";
import TipsAndTricks from "./pages/TipsAndTricks.tsx";
import Sustainability from "./pages/Sustainability.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import MyAlerts from "./pages/MyAlerts.tsx";
import Auth from "./pages/Auth.tsx";
import Account from "./pages/Account.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kitchens" element={<Kitchens />} />
            <Route path="/bathrooms" element={<Bathrooms />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/home-garden" element={<HomeGarden />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/something-to-sell" element={<SomethingToSell />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/alerts" element={<MyAlerts />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
