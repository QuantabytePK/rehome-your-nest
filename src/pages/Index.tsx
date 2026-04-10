import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CategoriesSection from "@/components/CategoriesSection";
import ValueProposition from "@/components/ValueProposition";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CategoriesSection />
      <ValueProposition />
      <TestimonialSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
