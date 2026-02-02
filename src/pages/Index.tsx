import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import VIPSection from "@/components/VIPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <div id="lineup">
        <Lineup />
      </div>
      <div id="vip">
        <VIPSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;