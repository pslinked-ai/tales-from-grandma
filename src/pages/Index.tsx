import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StoriesSection from "@/components/StoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
